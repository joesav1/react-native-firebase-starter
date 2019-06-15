import React from 'react';
import { StyleSheet, Platform, Image, Text, Button, TextInput, View, ScrollView } from 'react-native';
import { AppRegistry } from 'react-native';
import Todos from './Todos';

import firebase from 'react-native-firebase';


export default class App extends React.Component {
  constructor() {
    super();
    this.ref = firebase.firestore().collection('todos');
    this.state = {
      TextInput: '',
    };
  }
  updateTextInput(value) {
    this.setState({ TextInput: value })
  }

  addTodo() {
    this.ref.add({
      title: this.state.TextInput,
      complete: false,
    });

    this.setState({
      TextInput: '',
    });
  }

  render() {
    return (             <View>
      <ScrollView>
          <Text> List of TODOs</Text>
      </ScrollView>
      <TextInput
          placeholder={'Add TODO'}
          value={this.state.TextInput}
          onChangeText={(text) => this.updateTextInput(text)}
      />
      <Button
          title={'Add TODO'}
          disabled={!this.state.TextInput.length}
          onPress={()=>{this.addTodo()}}
          // disabled = {true}
          // onPress={()=>{}}

      />
  </View>);
  }

  // async componentDidMount() {
  //   // TODO: You: Do firebase things
  //   // const { user } = await firebase.auth().signInAnonymously();
  //   // console.warn('User -> ', user.toJSON());

  //   // await firebase.analytics().logEvent('foo', { bar: '123'});
  // }

}


AppRegistry.registerComponent('apptesttwo', () => Todos);































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

