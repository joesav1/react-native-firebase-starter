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
        return (
            <View>
                <ScrollView>
                    <Text> List of TODOs</Text>
                </ScrollView>
                <TextInput
                    placeholder={'Add TODO'}
                    // value={this.state.TextInput}
                    // onChangeText={(text) => this.updateTextInput(text)}
                />
                <Button
                    title={'Add TODO'}
                    // disabled={!this.state.TextInput.length}
                    // onPress={()=>{this.addTodo()}}
                    disabled = {true}
                    onPress={()=>{}}

                />
            </View>
        );
    }

}



export default Todos;