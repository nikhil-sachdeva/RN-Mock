import React from 'react';
import { StyleSheet, Text,Button, View } from 'react-native';

export default class Home extends React.Component {
    static navigationOptions = {
        title: 'Login Page',
        headerStyle: {
          backgroundColor: '#f4511e',
        }
      };
  render() {
    return (
      <View style={styles.container}>
          <Button
      onPress={() => this.props.navigation.push('Login')}
     title="Logout"/>
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