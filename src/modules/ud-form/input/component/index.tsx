import React, { useCallback, useState } from 'react';
import { Input, InputBorderedContainer } from './styles';
import { TextInputProps, ViewProps } from 'react-native';
import { useScrollToElement } from '@src/modules/ud-ui/hooks/useScrollToElement';
import { useRef } from 'react';
import { theme } from '@src/styles/theme/theme';

export type UDInputProps = {
  isFocused?: boolean;
  isError?: boolean;
  inputRef?: any;
  containerStyle?: ViewProps['style'];
  scrollConfig?: { scrollViewRef: any; scrollY: number; offset?: number };
  fFamily?: string;
} & TextInputProps;

const UDInput = (props: UDInputProps) => {
  const { inputRef, scrollConfig, fFamily, height = 48, ...inputProps } = props;
  const [isFocused, setFocused] = useState(false);
  const containerRef = useRef(null);
  const defaultStyles = {
    color: 'black',
    fontFamily: fFamily || theme.fonts.regular,
    fontSize: 18,
    textAlignVertical: height > 50 ? 'top' : 'auto',
    paddingTop: height > 50 ? 10 : 0,
  };
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
      <Input
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
        multiline={height > 50}
        numberOfLines={1}
        height={height}
        style={defaultStyles}
      />
    </InputBorderedContainer>
  );
};

export default UDInput;
