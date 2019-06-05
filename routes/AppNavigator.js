import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

import HomeScreen from '../src/home'
import Profile from '../src/profile'
import Settings from '../src/settings';

const AppNavigator = createBottomTabNavigator({
    Home : HomeScreen,
    Profile : Profile,
    Settings : Settings
})

const App = createAppContainer(AppNavigator);
export default App;