import { createStackNavigator } from 'react-navigation-stack';
import PhoneScreen from './components/Phone';
import VerifyScreen from './components/Verify';
import InfoScreen from './components/Info';

//phone, verify, info
let LoginNav = createStackNavigator({
  Phone: PhoneScreen,
  Verify: VerifyScreen,
  Info: InfoScreen,
});

export default LoginNav;
