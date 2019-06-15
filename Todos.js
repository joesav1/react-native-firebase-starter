import React from 'react';
import firebase from 'react-native-firebase';
import { ScrollView, View, Text, TextInput, Button } from 'react-native';

class Todos extends React.Component {
    constructor() {
        super();
        this.ref = firebase.firestore().collection('todos');
        // this.unsubscribe = null;

        // this.state = {
        //     TextInput: '',
        //     loading: true,
        //     todos: [],
        // };
    }
    render() {
        return null;
    }

}



export default Todos;