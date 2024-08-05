import React from 'react';
import { ActivityIndicator, View } from 'react-native';

export default function AuthCheckingScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
      }}>
      <ActivityIndicator size={'large'} />
    </View>
  );
}
