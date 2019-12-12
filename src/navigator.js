import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import SplashScreen from './onboard/Splash';
import DoorContainer from './home/DoorContainer';
import LoginNav from './onboard/navigator';
export default createAppContainer(
  createSwitchNavigator(
    {
      Doors: DoorContainer,
      Login: LoginNav,
      Splash: SplashScreen,
    },
    {
      initialRouteName: 'Login',
    },
  ),
);
