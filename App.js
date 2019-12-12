/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import AppNavigator from './src/navigator';
import { Provider } from 'react-redux';
import store from './src/store';
import NavigationService from './src/services/navigationService';

function App() {
  return (
    <Provider store={store}>
      <AppNavigator ref={navRef => NavigationService.setNavigator(navRef)} />
    </Provider>
  );
}

export default App;
