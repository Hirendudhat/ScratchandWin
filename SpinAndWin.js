import React from 'react';
import { Component } from 'react';
import { ImageBackground, SafeAreaView, StyleSheet, Text, View,TouchableOpacity,Image, Animated, Easing, Alert, Button } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

export default class App extends Component{
 
  constructor() {
    super();
    this.RotateValueHolder = new Animated.Value(0);
    this.timeout = new Animated.Value(0);
    this.state={
      NumberHolder : 1
    }
  }

  
  StartImageRotateFunction() {
    this.RotateValueHolder.setValue(0);
    Animated.timing(this.RotateValueHolder, {
      toValue: 1,
      duration: 4000, 
      useNativeDriver:true,
      easing: Easing.linear,
    }).start();

    var RandomNumber = Math.floor(Math.random() * 2000) + 500 ;
 
    this.setState({
    NumberHolder : RandomNumber
 
    })
    
  }
  

  render() {

    var t = 215;
    var t2 = this.state.NumberHolder;

//    AsyncStorage.getItem('key');

    var p = t + t2;
    var d2 = 'deg';

 //   AsyncStorage.setItem('key', t);
 //   alert('Data save');

    const RotateData = this.RotateValueHolder.interpolate({
      inputRange: [0, 1],
      outputRange: ['45deg', p+d2],
    });

    return (
      <SafeAreaView style={styles.container}>
        <ImageBackground style={{height:'100%',width:'100%'}} source={require('../assets/main_bg.jpg')}>
          <View style={{alignItems:'center'}}>
              <Text style={{marginTop:'20%',fontWeight:'bold',fontSize:25,color:'#fff'}}>SCRATCH AND EARN</Text>
              <TouchableOpacity
                    onPress={() => this.StartImageRotateFunction()}>
              <Animated.Image 
                  style={{height:300,width:300,alignItems:'center',marginTop:'20%',transform: [{ rotate: RotateData }]}} 
                  source={require('../assets/spin.png')}>
                {/* <View style={{alignItems:'center',alignContent:'center',alignSelf:'center'}}>
                
                </View> */}
              </Animated.Image>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => Alert.alert('Hiren')}>
                <Image style={{height:50,width:50,marginTop:-175}} source={require('../assets/spin_arrow.png')} ></Image>
              </TouchableOpacity>
          </View>
          <View>
 
                
        
      </View>
        </ImageBackground>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

