import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Header from './Header';

export class MainComponent extends Component {
    render() {
        return (
            <View>
                <Text>Testing header</Text>
                <Header></Header>
            </View>
        )
    }
}

export default MainComponent
