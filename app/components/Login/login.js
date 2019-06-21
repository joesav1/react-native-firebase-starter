import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Container, Item, Form, Input, Button, Label } from "native-base";
import firebase from "react-native-firebase";
import { StackNavigator } from 'react-navigation';

const App = StackNavigator({
    Home: { screen: HomeScreen },
    Profile: { screen: ProfileScreen} 
});
export class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',

        };
    }

    Signup = (email,password) => {
        try {
            firebase 
                .auth()
                .createUserWithEmailAndPassword(email,password)
                .then(user => {
                    console.log(user);
                });
            } catch(error) {
            console.log(error.toString(error))

        };
    }

    Login = (email, password) => {
        try {
            firebase
                .auth()
                .signInWithEmailAndPassword(email, password)
                .then(res => {
                    console.log(res.user.email)
                });
        } catch(error) {
            console.log("Couldnt login")
        } 
    }

    
    


    render() {
        return (
            <Container>
                <Form>
                <Item floatingLabel>
                    <Label>Email</Label>
                    <Input autoCapitalize="none"
                        autoCorrect={false}
                        onChangeText = {email => this.setState({ email }) }
                    />
                </Item>
                <Item floatingLabel>
                    <Label>Password</Label>
                    <Input
                    secureTextEntry={true}
                    autoCapitalize="none"
                    autoCorrect={false}
                    onChangeText={password => this.setState({ password })}
                    />
                </Item>
                <Button 
                        title = {'Login'}
                        full rounded success style={{ marginTop: 20 }}
                        onPress={() => this.Login(this.state.email, this.state.password)}
                >
                    <Text>Login</Text>
                </Button>
                <Button 
                        title = {'Sign-Up'}
                        full rounded success style={{ marginTop: 20 }}
                        onPress={() => this.Signup(this.state.email, this.state.password)}
                >
                    <Text>Sign-up</Text>
                </Button>

                </Form>
            </Container>
        );
    }
}

export default Login
