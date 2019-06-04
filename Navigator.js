import { createStackNavigator, createAppContainer } from 'react-navigation';
import Login from './src/login';
import Home from './src/home';

const Navigator = createStackNavigator({
    Login: {screen : Login},
  Home: { screen: Home },

});
const App = createAppContainer(Navigator);
export default App;