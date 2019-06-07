import { createBottomTabNavigator, createAppContainer } from 'react-navigation'

import HomeScreen from '../src/home';
import Profile from '../src/profile';


const AppNavigator = createBottomTabNavigator({
    HomeScreeen : HomeScreen,
    Profile : Profile
})

const App = createAppContainer(AppNavigator);
export default App;