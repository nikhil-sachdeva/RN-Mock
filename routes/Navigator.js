import { createStackNavigator, createAppContainer, createSwitchNavigator, createBottomTabNavigator, DrawerActions } from 'react-navigation';
import Login from '../src/login'
import SignInScreen from '../src/login'
import AuthLoadingScreen from '../src/AuthLoadingScreen'
import AppNavigator from '../routes/AppNavigator'
import DrawerNavigator from '../routes/DrawerNavigator'


const Navigator = createSwitchNavigator({
    AuthLoading : AuthLoadingScreen,
    Auth : SignInScreen,
    App : AppNavigator,
    Drawer : DrawerNavigator
});
  
const App = createAppContainer(Navigator);
export default App;