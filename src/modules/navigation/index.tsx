import React, { useMemo } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import screenNames from './screen-names';
import AuthScreen from '@src/modules/auth/ui/screens/auth';
import HomeScreen from '@src/modules/home/ui/screens';
import { navigationRef } from '@src/modules/navigation/RootNavigation';
import { useSelector } from 'react-redux';
import {
  isAuthCheckedSelector,
  isAuthCheckingSelector,
} from '@src/modules/auth/store/selectors';
import AuthCheckingScreen from '@src/modules/auth/ui/screens/auth-checking';

const Stack = createStackNavigator();

export default function StackNavigator() {
  const isAuthChecked = useSelector(isAuthCheckedSelector);
  const isAuthChecking = useSelector(isAuthCheckingSelector);

  const isAppLoading = useMemo(
    () => !isAuthChecked || isAuthChecking,
    [isAuthChecked, isAuthChecking],
  );

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator>
        {isAuthChecking && (
          <Stack.Screen
            name={screenNames.authChecking}
            component={AuthCheckingScreen}
            options={{ headerShown: false }}
          />
        )}
        {!isAuthChecked && (
          <Stack.Screen
            name={screenNames.auth}
            component={AuthScreen}
            options={{ headerShown: false }}
          />
        )}
        <Stack.Screen
          name={screenNames.home}
          component={HomeScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
