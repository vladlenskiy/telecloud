import * as React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WelcomeScreen from 'src/modules/auth/ui/screens/auth';

function WebNavigator() {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={WelcomeScreen} />
      </Routes>
    </Router>
  );
}

export default WebNavigator;
