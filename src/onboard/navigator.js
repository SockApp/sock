import { createStackNavigator } from 'react-navigation-stack';
import PhoneScreen from './screens/Phone';
import VerifyScreen from './screens/Verify';
import AddInfoScreen from './screens/AddInfo';

const LoginNav = createStackNavigator({
  Phone: PhoneScreen,
  Verify: VerifyScreen,
  AddInfo: AddInfoScreen,
});

export default LoginNav;
