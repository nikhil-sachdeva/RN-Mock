import React from 'react';
import {createSwitchNavigator, createStackNavigator, createDrawerNavigator} from 'react-navigation'
import AppNavigator from './routes/Navigator';
import SignInScreen from './src/login'
import AuthLoadingScreen from './src/AuthLoadingScreen'
import HomeScreen from './src/home'
import Settings from './src/settings';
import AppDrawerNavigator from './routes/DrawerNavigator'

// const AuthStackNavigator = createStackNavigator ({
//   SignIn : SignInScreen,
  
// })



// export default createSwitchNavigator ({
//   AuthLoading : AuthLoadingScreen,
//   Auth : AuthStackNavigator,
//   App : HomeScreen
// })




export default class App extends React.Component {
  render() {
    return (
      <AppNavigator/>
    );
  }
}