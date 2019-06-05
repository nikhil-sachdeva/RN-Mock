import React from 'react';
import { StyleSheet, Text,Button, View,ActivityIndicator, AsyncStorage } from 'react-native';
import { throwStatement } from '@babel/types';

export default class Home extends React.Component {

    constructor(){
        super()
        this.loadApp()
    }
    loadApp = async() =>{
        const userToken = await AsyncStorage.getItem('userToken')
        this.props.navigation.navigate(userToken?'App':'Auth')

    }


    static navigationOptions = {
        title: 'Loading',
        headerStyle: {
          backgroundColor: '#f4511e',
        }
      };

    
  render() {
    return (
      <View style={styles.container}>
      <Text>Welcome</Text>
          <ActivityIndicator/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor : '#fff497',
    flex: 1,
    padding : 20,
    justifyContent: 'center',
  },
});