import React from 'react';
import { StyleSheet, Platform, Image, Text, Button, TextInput, View, ScrollView } from 'react-native';
import { AppRegistry } from 'react-native';
import Todos from './Todos';
import Header from './app/components/Header/index';
import Login from './app/components/Login/login'
import firebase from 'react-native-firebase';


AppRegistry.registerComponent('apptesttwo', () => Todos);
export default class App extends React.Component {
  render(){
    console.log("JS - testing tingz");
    return(
      <Login/>
      // <View>
      //   <Header/>
       //<Todos/>
      // </View>
    );
    
  }




}




























// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   logo: {
//     height: 120,
//     marginBottom: 16,
//     marginTop: 64,
//     padding: 10,
//     width: 135,
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
//   modules: {
//     margin: 20,
//   },
//   modulesHeader: {
//     fontSize: 16,
//     marginBottom: 8,
//   },
//   module: {
//     fontSize: 14,
//     marginTop: 4,
//     textAlign: 'center',
//   }
// });

