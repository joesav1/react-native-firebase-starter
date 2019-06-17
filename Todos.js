import React from 'react';
import firebase from 'react-native-firebase';
import { Flatlist, ScrollView, View, Text, TextInput, Button } from 'react-native';
import Todo from './Todo';
class Todos extends React.Component {
    constructor() {
        super();
        this.ref = firebase.firestore().collection('todos');
        this.unsubscribe = null;

        this.state = {
          TextInput: '',
          loading: true,
          todos: [],
        };
      }

      componentDidMount() {
          this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate)
      }

      componentWillUnmount() {
          this.unsubscribe();
      }

      onCollectionUpdate = (querySnapshot) => {
          const todos = [];
          querySnapshot.forEach((doc) => {
              const {title, complete} = doc.data();

              todos.push({
                  key: doc.id,
                  doc,
                  title,
                  complete,
              });
          });

          this.setState({
              todos,
              loading: false,
          });
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
        if(this.state.loading) {
            return null;
        }

        return (
            
        <View style = {{ flex: 1}}>
          <Flatlist
            data={this.state.todos}
            renderItem={({item}) => <Todo {...item}/>}
            />
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
    


export default Todos;