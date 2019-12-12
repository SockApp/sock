/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { registerScreens } from './src/navigation';

registerScreens();
AppRegistry.registerComponent('sock', () => App);
