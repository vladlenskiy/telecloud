import React, { useCallback, useState } from 'react';
import { TextInputMaskProps } from 'react-native-text-input-mask';
import { MaskedInput, InputBorderedContainer } from './styles';
import { ViewProps } from 'react-native';
import { useScrollToElement } from '@src/modules/ud-ui/hooks/useScrollToElement';
import { useRef } from 'react';

export type UDMaskedInputProps = {
  isFocused?: boolean;
  isError?: boolean;
  inputRef?: any;
  containerStyle?: ViewProps['style'];
  scrollConfig?: { scrollViewRef: any; scrollY: number; offset?: number };
} & TextInputMaskProps;

const UDMaskedInput = (props: UDMaskedInputProps) => {
  const { inputRef, scrollConfig, ...inputProps } = props;
  const [isFocused, setFocused] = useState(false);
  const containerRef = useRef(null);
  const { scrollToElement, elementRef } = useScrollToElement(
    scrollConfig?.scrollViewRef,
    containerRef,
    { scrollY: scrollConfig?.scrollY, offset: scrollConfig?.offset },
  );
  const customFocus = useCallback(
    e => {
      props?.onFocus && props.onFocus(e);
    },
    [props.onFocus],
  );
  const customBlur = useCallback(
    e => {
      props?.onBlur && props.onBlur(e);
    },
    [props.onBlur],
  );
  return (
    <InputBorderedContainer
      isFocused={isFocused}
      isError={props.isError}
      style={props.containerStyle}
      ref={elementRef}>
      <MaskedInput
        ref={inputRef}
        {...inputProps}
        onFocus={(e: any) => {
          customFocus(e);
          setFocused(true);
          scrollToElement();
        }}
        isFocused={isFocused}
        onBlur={(e: any) => {
          customBlur(e);
          setFocused(false);
        }}
        multiline={false}
        numberOfLines={1}
      />
    </InputBorderedContainer>
  );
};

export default UDMaskedInput;
