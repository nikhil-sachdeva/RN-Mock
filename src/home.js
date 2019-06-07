import React from 'react';
import { StyleSheet, Text,Button, View, AsyncStorage, ActivityIndicator, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import AppNavigator from '../routes/AppNavigator'



export default class Home extends React.Component {
  constructor(props){
    super(props);
    this.state ={ isLoading: true}
  }
    static navigationOptions = { 
        title: 'Home',
        tabBarIcon : ({tintColor}) => (
                <Icon name='md-home' size={24}/>
        ),
        headerStyle: {
          backgroundColor: '#f4511e',
        }
      };
    logout = () => {
    AsyncStorage.removeItem('userToken')
    this.props.navigation.navigate('Auth')
    }

componentDidMount(){
  return fetch('https://jsonplaceholder.typicode.com/posts')
  .then((response) => response.json())
  .then((responseJson) => {

    this.setState({
      isLoading: false,
      dataSource: responseJson,
    }, function(){

    });

  })
  .catch((error) =>{
    console.error(error);
  });
}
  render() {
    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }

    return(
      <View style={styles.container}>
        <FlatList
          data={this.state.dataSource}
          renderItem={({item}) => <View style={styles.card}><Text style={styles.text}>{item.id}</Text><Text style={styles.title}>{item.title}</Text><Text>{item.body}, {item.releaseYear}</Text></View>}
          keyExtractor={({id}, index) => id}
        />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  card : {
    padding : 20,
    margin : 10,
    borderColor: '#ff7a00',
    borderWidth: 2,
    borderRadius : 10,
    backgroundColor : '#f3ea68',
    flex: 1,
  },
  container: {

    backgroundColor : '#fff497',
    flex: 1,
    padding : 20,
    justifyContent: 'space-between',
  },
  text :{
      justifyContent : 'space-evenly',
      color : '#000',
      fontSize : 30,
  },
  title :{
    alignContent : 'center',
    color : '#000',
    fontSize : 20,
}
});