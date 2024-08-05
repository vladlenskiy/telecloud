import { AppRegistry, Platform } from 'react-native';
import App from '@src/App';
import { name as appName } from './app.json';
import { createRoot } from 'react-dom/client';
import React from 'react';

if (Platform.OS === 'web') {
  const root = createRoot(document.getElementById('root'));
  root.render(<App />);
} else {
  AppRegistry.registerComponent(appName, () => App);
}
