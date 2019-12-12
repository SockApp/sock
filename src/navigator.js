import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import SplashScreen from './onboard/Splash';
import DoorContainer from './home/DoorContainer';

export default createAppContainer(
  createSwitchNavigator(
    {
      Doors: DoorContainer,
      Splash: SplashScreen,
    },
    {
      initialRouteName: 'Splash',
    },
  ),
);
