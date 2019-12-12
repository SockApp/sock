import Login from './Phone';
import { createStackNavigator } from 'react-navigation-stack';
import PhoneScreen from './Phone';
import VerifyScreen from './Verify';
import InfoScreen from './Info';
//phone, verify, info
let LoginNav = createStackNavigator({
  Phone: PhoneScreen,
  Verify: VerifyScreen,
  Info: InfoScreen,
});

export default LoginNav;
