import React, { Component } from 'react';
import { ImageBackground, Platform, StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import 'react-native-gesture-handler';
import {
  NavigationContainer
} from '@react-navigation/native';
import {
  createStackNavigator
} from '@react-navigation/stack';
import {
  createMaterialTopTabNavigator
} from '@react-navigation/material-top-tabs';
/*import
  MaterialCommunityIcons
from 'react-native-vector-icons/MaterialCommunityIcons';*/

import FirstPage from './TransactionHistoryPage';
import SecondPage from './ReddemHistoryPage';

const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

function TabStack() {
  return (
    <View style={{ height: '100%', width: '100%', marginBottom: 20 }}>
      <Tab.Navigator
        initialRouteName="Feed"
        tabBarOptions={{
          activeTintColor: 'yellow',
          inactiveTintColor: '#fff',
          style: {
            backgroundColor: '#323abd',
            borderRadius: 0,
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            borderWidth: 0.5,
            borderColor: '#fff',
            height: '8%'
          },
          labelStyle: {
            textAlign: 'center',
          },
          indicatorStyle: {
            height: 0
          },
        }}>
        <Tab.Screen
          name="FirstPage"
          component={FirstPage}
          options={{
            tabBarLabel: 'Transaction History',
            tabBarIcon: ({ tintColor }) => (<Image
              source={require("../assets/tab_home.png")}
              resizeMode="center"
              style={{ width: 30, height: 40, tintColor: tintColor }}
            />)
          }} />
        <Tab.Screen
          name="SecondPage"
          component={SecondPage}
          options={{
            tabBarLabel: 'Redeem History',
            tabBarIcon: ({ tintColor }) => (<Image
              source={require("../assets/tab_offer.png")}
              resizeMode="center"
              style={{ width: 30, height: 40, tintColor: tintColor }}
            />)
          }} />
      </Tab.Navigator>
    </View>

  );
}

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    }
  }
  render() {

    return (
      <SafeAreaView>
        <View style={{ backgroundColor: '#fff', height: '25%', width: '100%', paddingTop: 20 }}>
          <Text style={{ color: '#323abd', textAlign: "center", fontSize: 25, fontWeight: 'bold' }}>SCRATCH AND EARN</Text>
          <View style={{ flexDirection: 'row', marginHorizontal: 15, marginTop: 30, width: '100%' }}>
            <View>
              <Text style={{ fontSize: 10, color: '#323abd' }}>Current Balance</Text>
              <Text style={{ fontSize: 30, color: '#323abd', marginTop: 5 }}>45150.00</Text>
            </View>
            <View style={{ flexDirection: 'row-reverse', width: '50%' }}>
              <TouchableOpacity style={{ backgroundColor: '#323abd', height: '50%', width: '130%', borderRadius: 5 }} onPress={() => this.props.navigation.navigate('ReddemPage')}>
                <Text style={{ fontSize: 12, color: '#fff', alignSelf: "center", marginTop: '7%', textDecorationLine: 'underline', textDecorationColor: '#fff', paddingBottom: 10 }}>Redeem Now</Text>

              </TouchableOpacity>
            </View>

          </View>
        </View>
        <ImageBackground source={require('../assets/main_bg.jpg')} style={{ height: '100%', width: '100%' }}>
          <View style={{ height: '100%', width: '90%', marginTop: -20, marginLeft: '5%', marginRight: 20 }}>
            <Stack.Navigator
              initialRouteName="Settings"
              style={{ backgroundColor: '#000' }}
              screenOptions={{
                headerShown: false

              }}>
              <Stack.Screen
                name="TabStack"
                component={TabStack}
                options={{ title: 'Tab Stack' }}
              />
            </Stack.Navigator>
          </View>

        </ImageBackground>

      </SafeAreaView>
    );

  }
}