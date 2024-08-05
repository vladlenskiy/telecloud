import styled from '@emotion/native';
import { BottomSheetTextInput, BottomSheetView } from '@gorhom/bottom-sheet';
import { StyleSheet } from 'react-native';
import * as Animatable from 'react-native-animatable';

export const styles = StyleSheet.create({
  animatedBackground: {
    aspectRatio: 1,
    flex: 1,
    justifyContent: 'center',
  },
  typeAnimation: {
    color: 'white',
    fontSize: 30,
  },
});

export const ModalContainer = styled(BottomSheetView)`
  flex: 1;
  margin-horizontal: 4%;
  margin-vertical: 4%;
  padding-bottom: 10px;
`;

export const Form = styled(BottomSheetTextInput)`
  background-color: white;
  height: 50px;
  border-radius: 16px;
  padding-left: 14%;
  width: 100%;
  font-size: 20px;
`;

export const TypeAnimationContainer = styled.View`
  position: absolute;
  align-self: center;
  justify-content: center;
  align-items: center;
  top: 40%;
  flex-direction: row;
`;

export const LoginCodeContainer = styled(BottomSheetView)`
  flex: 1;
  justify-content: center;
  align-items: center;
  margin-horizontal: 4%;
  margin-vertical: 4%;
  padding-bottom: 10px;
`;

export const Loader = styled.ActivityIndicator`
  top: 16px;
  padding-left: 8px;
  position: absolute;
`;

export const ButtonContainer = styled(Animatable.View)`
  align-self: center;
  width: 92%;
  bottom: 7%;
`;
