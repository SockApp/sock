import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import DoorScreen from './home/Door';
import SplashScreen from './onboard/Splash';

export default createAppContainer(
  createSwitchNavigator(
    {
      DoorScreen,
      SplashScreen,
    },
    {
      initialRouteName: 'SplashScreen',
    },
  ),
);
