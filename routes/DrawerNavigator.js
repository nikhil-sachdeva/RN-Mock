import { createDrawerNavigator, createAppContainer } from "react-navigation";
import HomeScreen from '../src/home';
import Settings from '../src/settings';

const AppDrawerNavigator = createDrawerNavigator({
    HomeScren : HomeScreen,
    Settings : Settings
})

const App = createAppContainer(AppDrawerNavigator);
export default App;