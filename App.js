import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, useWindowDimensions, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';

import LoginPage from './pages/LoginPage';
import TabPage from './pages/TabPage'
import SpinAndWin from './pages/SpinAndWin';
import QuickOfferPage from './pages/QuickOfferPage';
import ScratchAndWinPage from './pages/ScratchandWin';
import ReddemPage from './pages/ReddemPage';

const Stack = createStackNavigator();

export default function App() {
  
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={'LoginPage'}>
        <Stack.Screen
          name={'LoginPage'}
          component={LoginPage}
          options={{
            headerShown:false
          }}
        />
        <Stack.Screen
          name={'TabPage'}
          component={TabPage}
          options={{
            headerShown:false
          }}
        />
        <Stack.Screen
          name="QuickOfferPage"
          component={QuickOfferPage}
          options={{
            headerShown:false
          }}/>
        <Stack.Screen
          name={'SpinAndWin'}
          component={SpinAndWin}
          options={{
            headerShown:false
          }}
        />
        <Stack.Screen
          name="ScratchAndWinPage"
          component={ScratchAndWinPage}
          options={{
            headerShown:false
          }}/>
        <Stack.Screen
          name="ReddemPage"
          component={ReddemPage}
          options={{
            headerShown:false
          }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
