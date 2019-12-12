import { Navigation } from 'react-native-navigation';
import DoorScreen from './home/Door';
import SplashScreen from './onboard/Splash';

export function registerScreens() {
  Navigation.registerComponent('DoorScreen', () => DoorScreen);
  Navigation.registerComponent('SplashScreen', () => SplashScreen);
}
