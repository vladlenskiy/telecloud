import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import UDFormError from '../error';
import { UDFormErrorContainer } from './styles';
import { ErrorMessage } from '@hookform/error-message';
import { View } from 'react-native';
import UDFormLabel, { UDFormLabelProps } from '../label';
import UDInput, { UDInputProps } from './component';
import UDMasketInput, { UDMaskedInputProps } from './component/maskInput';

type CommonProps = {
  name: string;
  desc?: string;
  labelProps?: UDFormLabelProps;
  inputRef?: any;
  onChangeInterceptor?: (value: any) => any;
  height?: number;
};
type SimpleProps = CommonProps & { mask?: undefined } & UDInputProps;
type MaskedProps = CommonProps & { mask: string } & UDMaskedInputProps;

export type UDFormInputProps = SimpleProps | MaskedProps;

const UDFormInput = (props: UDFormInputProps) => {
  const { control, trigger } = useFormContext();
  const {
    name,
    labelProps,
    mask = undefined,
    onChangeInterceptor,
    containerStyle,
    height = 48,
    desc,
    ...inputProps
  } = props;
  const defaultStyles = { color: 'black' };
  const Component = mask ? UDMasketInput : UDInput;
  return (
    <View style={containerStyle}>
      {labelProps?.children ? (
        <UDFormLabel style={{ paddingBottom: desc ? 0 : 8 }} {...labelProps} />
      ) : (
        <></>
      )}
      {desc && <UDFormLabel style={{ fontWeight: '400' }}>{desc}</UDFormLabel>}
      <Controller
        control={control}
        name={name}
        render={({
          field: { value, onChange, onBlur },
          fieldState: { error },
        }) => (
          <Component
            {...inputProps}
            value={value}
            height={height}
            onChangeText={(text, maskeText) => {
              const value = onChangeInterceptor
                ? onChangeInterceptor(maskeText || text)
                : maskeText || text;
              onChange(value);
              error && trigger(name);
            }}
            onBlur={e => {
              e.persist();
              inputProps?.onBlur && inputProps.onBlur(e);
              onBlur();
            }}
            isError={!!error}
            mask={mask}
            style={defaultStyles}
          />
        )}
      />
      <UDFormErrorContainer>
        <ErrorMessage
          name={name}
          render={({ message }) => <UDFormError>{message}</UDFormError>}
        />
      </UDFormErrorContainer>
    </View>
  );
};

export default UDFormInput;
