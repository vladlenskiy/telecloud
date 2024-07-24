/**
 Code something great ✌
 */

import React from 'react';
import { ThemeProvider } from '@emotion/react';
/** Alias using example */
import { theme } from '@styles/theme';
import { Text, View } from 'react-native';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <View>
        <Text>Hello World!</Text>
      </View>
    </ThemeProvider>
  );
};

export default App;
