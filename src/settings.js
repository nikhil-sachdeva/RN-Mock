import React from 'react';
import { StyleSheet, Text,Button, View, AsyncStorage } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
export default class Home extends React.Component {
    static navigationOptions = { 
        title: 'Settings',
        tabBarIcon : ({tintColor}) => (
            <Icon name='md-settings' size={24}/>
    ),
        headerStyle: {
          backgroundColor: '#f4511e',
        }
      };


    logout = () => {
    AsyncStorage.removeItem('userToken')
    this.props.navigation.navigate('Auth')
    }
  render() {
    return (
      <View style={styles.container}>
      <Text style={styles.text}>This is your Settings</Text>
          <Button
      onPress={(this.logout)}
     title="Logout"/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor : '#f844f5',
    flex: 1,
    padding : 20,
    justifyContent: 'space-between',
  },
  text :{
      paddingTop : 30,
      fontSize: 40,
  }
});