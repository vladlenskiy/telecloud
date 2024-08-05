import React, { useEffect } from 'react';
import { ThemeProvider } from '@emotion/react';
import { theme } from '@styles/theme/theme';
import StackNavigator from '@src/modules/navigation';
import WebviewCrypto from 'react-native-webview-crypto';
import { Provider } from 'react-redux';
import store from '@src/store/store';
import { PortalProvider } from '@gorhom/portal';
import { checkAuth } from '@src/modules/auth/store/actions';

const IGNORED_LOGS = [
  '[Reanimated] Tried to modify key `reduceMotion` of an object which has been already passed to a worklet',
];

if (__DEV__) {
  const withoutIgnored =
    logger =>
    (...args) => {
      const output = args.join(' ');

      if (!IGNORED_LOGS.some(log => output.includes(log))) {
        logger(...args);
      }
    };

  console.log = withoutIgnored(console.log);
  console.info = withoutIgnored(console.info);
  console.warn = withoutIgnored(console.warn);
  console.error = withoutIgnored(console.error);

  const originalConsoleError = console.error;
  // remove default props error message
  console.error = (message, ...args) => {
    if (
      typeof message === 'string' &&
      (message.includes('Warning:') || message.includes('Reanimated'))
    ) {
      return;
    }
    originalConsoleError.apply(console, [message, ...args]);
  };
}

const App = () => {
  useEffect(() => {
    store.dispatch(checkAuth());
  }, []);

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <PortalProvider>
          <WebviewCrypto />
          <StackNavigator />
        </PortalProvider>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
