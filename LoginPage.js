import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Component } from 'react';
import { ImageBackground, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
        isLoading: true
        }
    }
    render() {
  return (
   <SafeAreaView>
       <ImageBackground style={styles.imageBackground} source={require('../assets/main_bg.jpg')}>
           <View style={{alignItems:'center'}}>
               <Text style={{fontSize:35,color:'#fff',marginTop:'10%',fontWeight:'bold'}}>LOGIN</Text>
               <Image style={{height:'30%',width:'40%',borderWidth:2.5,borderColor:'#fff',borderRadius:30,marginTop:'10%'}} source={require('../assets/icon1.png')}/>
               <TouchableOpacity
                    style={{width:'85%',height:'13%',marginTop:'10%'}}
                    onPress={() => this.props.navigation.navigate('TabPage')}>
                    <Image style={{width:'100%',height:'100%',borderWidth:5,borderRadius:10,borderColor:'#fff'}} 
                        source={require('../assets/login_btn.png')}/>
                </TouchableOpacity>
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
  imageBackground: {
    height:'100%',
    width:'100%'
  }
});
