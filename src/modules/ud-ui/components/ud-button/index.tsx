import React from 'react';
import * as S from './styles';
import { ViewStyle, StyleProp, View, StyleSheet } from 'react-native';

type Props = {
  onPress: () => void;
  children?: any;
  label?: string;
  withSpacings?: boolean; // hotfix
  style?: StyleProp<ViewStyle>;
};

function UDButton(props: Props) {
  const { label, children, withSpacings = true, ...other } = props;
  return (
    <View style={style.button}>
      <S.Button {...other}>
        {label && <S.ButtonLabel>{label}</S.ButtonLabel>}
        {children && children}
      </S.Button>
    </View>
  );
}
const style = StyleSheet.create({
  button: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    // shadowOffset: {
    //   width: 0,
    //   height: 20,
    // },
    // shadowOpacity: 1,
    // shadowRadius: 15,
    // shadowColor: 'rgba(0, 0, 0, 0.45)',
  },
});

export default UDButton;
