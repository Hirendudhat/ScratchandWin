import 'react-native-gesture-handler';
import * as React from 'react';
import {Image, View} from 'react-native';
import {
  NavigationContainer
} from '@react-navigation/native';
import {
  createStackNavigator
} from '@react-navigation/stack';
import {
  createBottomTabNavigator
} from '@react-navigation/bottom-tabs';

import HomePage from './HomePage';
import OfferPage from './OfferPage';
import WalletPage from './WalletPage';
import ProfilePage from './ProfilePage';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStack() {
  return (
      <Stack.Navigator
        initialRouteName="HomePage"
        screenOptions={{
            headerShown:false
        }}>
        <Stack.Screen
          name="HomePage"
          component={HomePage}
          options={{ title: 'Home Page' }}/>
       
      </Stack.Navigator>
  );
}

function OfferStack() {
  return (
    <Stack.Navigator
      initialRouteName="OfferPage"
      screenOptions={{
        headerShown:false
      }}>
      <Stack.Screen
        name="OfferPage"
        component={OfferPage}
        options={{ title: 'OfferPage' }}/>

    </Stack.Navigator>
  );
}
function WalletStack() {
    return (
      <Stack.Navigator
        initialRouteName="WalletPage"
        screenOptions={{
            headerShown:false
        }}>
        <Stack.Screen
          name="WalletPage"
          component={WalletPage}
          options={{ title: 'WalletPage' }}/>
  
      </Stack.Navigator>
    );
  }
  function ProfileStack() {
    return (
      <Stack.Navigator
        initialRouteName="ProfilePage"
        screenOptions={{
            headerShown:false
        }}>
        <Stack.Screen
          name="ProfilePage"
          component={ProfilePage}
          options={{ title: 'ProfilePage' }}/>
  
      </Stack.Navigator>
    );
  }

function App() {
  return (
    
    <Tab.Navigator
            initialRouteName="HomeStack"
            tabBarOptions={{
              activeTintColor: 'blue',
              style: {height:'7%',backgroundColor:'#fff'}
            }}>
        
        <Tab.Screen
          name="HomeStack"
          component={HomeStack}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon:({tintColor})=>(<Image
                source={require("../assets/tab_home.png")}
                resizeMode="center"                
                style={{ width: 30, height: 40, tintColor: tintColor }}
                />)
           
          }}  />
        <Tab.Screen
          name="OfferStack"
          component={OfferStack}
          options={{
            tabBarLabel: 'Offer',
            tabBarIcon:({tintColor})=>(<Image
                source={require("../assets/tab_offer.png")}
                resizeMode="center"
                style={{ width: 30, height: 40, tintColor: tintColor }}
                />)
          }} />
                  <Tab.Screen
          name="WalletStack"
          component={WalletStack}
          options={{
            tabBarLabel: 'Wallet',
            tabBarIcon:({tintColor})=>(<Image
                source={require("../assets/tab_wallet.png")}
                resizeMode="center"                
                style={{ width: 30, height: 40, tintColor: tintColor }}
                />)
           
          }}  />
        <Tab.Screen
          name="ProfileStack"
          component={ProfileStack}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon:({tintColor})=>(<Image
                source={require("../assets/tab_profile.png")}
                resizeMode="center"
                style={{ width: 30, height: 40, tintColor: tintColor }}
                />)
          }} />
      </Tab.Navigator>
    
      
    
  );
}
export default App;