import { createStackNavigator, createAppContainer, createSwitchNavigator, createBottomTabNavigator } from 'react-navigation';
import Login from '../src/login'
import Home from '../src/home'
import SignInScreen from '../src/login'
import AuthLoadingScreen from '../src/AuthLoadingScreen'
import AppNavigator from '../routes/AppNavigator'


const Navigator = createSwitchNavigator({
    AuthLoading : AuthLoadingScreen,
    Auth : SignInScreen,
    App : AppNavigator

});


  
  
const App = createAppContainer(Navigator);
export default App;