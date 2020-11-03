import React, { Component } from 'react';
import { ImageBackground, Platform, StyleSheet, Text, View } from 'react-native';

export default class App extends Component {
    render() {
        return (
            <ImageBackground style={{ backgroundColor: 'red', height: '100%', width: '100%' }} source={require('../assets/main_bg.jpg')}>
                <View style={{ backgroundColor: '#fff', height: '50%', width: '100%', marginTop: 10, borderRadius: 0, borderBottomLeftRadius: 10, borderBottomRightRadius: 10, }}>
                    <Text>Transaction History Page</Text>
                </View>

            </ImageBackground>
        );
    }
}