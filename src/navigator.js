import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import SplashScreen from './Splash';
import HomeNav from './home/navigator';
import LoginNav from './onboard/navigator';

export default createAppContainer(
  createSwitchNavigator(
    {
      Main: HomeNav,
      Login: LoginNav,
      Splash: SplashScreen,
    },
    {
      initialRouteName: 'Splash',
    },
  ),
);
