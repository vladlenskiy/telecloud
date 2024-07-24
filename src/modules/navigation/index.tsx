import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import screenNames from './screen-names';
import ExampleModuleScreensExample from '../example-module/ui/screens/example';

const Stack = createStackNavigator();

export default function StackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={screenNames.example}
          component={ExampleModuleScreensExample}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
