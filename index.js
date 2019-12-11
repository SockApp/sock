/**
 * @format
 */

import {Navigation} from 'react-native-navigation';
import App from './App';

Navigation.registerComponent('navigation.home', () => App);
Navigation.registerComponent('secondTabScreen', () => App);

const bottomTabs = {
  children: [
    {
      component: {
        name: 'navigation.home',
        options: {
          bottomTab: {
            text: 'Tab 1',
            icon: require('./jerry.jpg'),
          },
        },
      },
    },
    {
      component: {
        name: 'navigation.home',
        options: {
          bottomTab: {
            text: 'Tab 2',
            icon: require('./jerry.jpg'),
          },
        },
      },
    },
  ],
  options: {},
};

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      bottomTabs: bottomTabs,
    },
  });
});
