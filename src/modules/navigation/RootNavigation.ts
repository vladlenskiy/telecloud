import {
  CommonActions,
  NavigationContainerRef,
  StackActions,
} from '@react-navigation/native';
import React from 'react';

export const isAppMountedRef = React.createRef<boolean>();
export const navigationRef = React.createRef<NavigationContainerRef>();

export function navigate(...args: any) {
  safetyNavigationCall(() => {
    navigationRef.current?.navigate(...args);
  });
}

export function getCurrentScreenName() {
  return safetyNavigationCall(() => {
    return navigationRef.current?.getCurrentRoute()?.name;
  });
}

export function push(...args: Parameters<(typeof StackActions)['push']>) {
  safetyNavigationCall(() => {
    navigationRef.current?.dispatch(StackActions.push(...args));
  });
}

export function pop(...args: Parameters<(typeof StackActions)['pop']>) {
  safetyNavigationCall(() => {
    navigationRef.current?.dispatch(StackActions.pop(...args));
  });
}

export function navigationDispatch(
  ...args: Parameters<NavigationContainerRef['dispatch']>
) {
  safetyNavigationCall(() => {
    navigationRef.current?.dispatch(...args);
  });
}

function safetyNavigationCall(successCallback: () => void | string) {
  if (canUseNavigation()) {
    return successCallback();
  } else {
    setTimeout(() => {
      return safetyNavigationCall(successCallback);
    }, 100);
  }
}

function canUseNavigation() {
  return !!(isAppMountedRef.current && navigationRef.current);
}

export function navigateAndReset(routeName: string, params: any) {
  navigationRef.current?.dispatch(
    CommonActions.reset({
      index: 0,
      routes: [{ name: routeName, params }],
    }),
  );
}

export function navigateBack() {
  safetyNavigationCall(() => {
    navigationRef.current?.goBack();
  });
}
