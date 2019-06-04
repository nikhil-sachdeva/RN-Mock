import React, { Component } from 'react';
import { Image,Alert, AppRegistry, Button, StyleSheet, View,ScrollView, TextInput } from 'react-native';

export default class LoginScreen extends Component {
    static navigationOptions = {
        title: 'Login Page',
        headerStyle: {
          backgroundColor: '#f4511e',
        }
      };
  constructor(props) {
    super(props);
    this.state = { 
      email : '',
      password : '',
      text : 'Useless Placeholder' ,
    };
    
  }
  validate = (email,pass) => {
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
         if (reg.test(email) === true && pass.length>8){
            this.props.navigation.push('Home');
         }
         else{
             Alert.alert("Invalid E-mail or Password");
         }

 }
  render() {
    let pic = {
      uri: 'https://firebase.google.com/downloads/brand-guidelines/PNG/logo-vertical.png'
    };
    return (
      <View style={styles.container}>
    <View>
      <Image style = {styles.image} source={pic}/>
      </View>
        <View style={styles.input}> 
        <TextInput
        onChangeText={(text) => {this.setState({email : text})}}
        
        underlineColorAndroid = "transparent"
        placeholder = "Email"
        placeholderTextColor = "#ffbf17"
        autoCapitalize = "none"
        
      />
      </View>
      <View style={styles.input}> 
        <TextInput
        onChangeText={(text) => this.setState({password : text})}
        secureTextEntry = {true}
        underlineColorAndroid = "transparent"
        placeholder = "Password"
        placeholderTextColor = "#ffbf17"
        autoCapitalize = "none"
               
      />
  
      </View>
      <View style={styles.buttonContainer}>
      <Button
      onPress={() => {(this.validate(this.state.email,this.state.password))}}
      title="LOGIN"
      color="#fb3232"/>
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  image : {
    height : 180,
    marginLeft : 130,
    marginBottom : 20,
    width : 110,
    justifyContent : 'center',
  },
  container: {
    backgroundColor : '#fff497',
    paddingTop : 50,
    flex: 1,
    justifyContent: 'center',
  },
  buttonContainer: {
    margin: 25,
    backgroundColor : "#c60000"
  },
  alternativeLayoutButtonContainer: {
    margin: 0,
  },
  input : {
    marginTop: 15,
    margin : 10,
    fontSize : 100,
    height: 40,
    borderColor: '#ff7a00',
    borderWidth: 2,
    borderRadius : 10,
  }
});