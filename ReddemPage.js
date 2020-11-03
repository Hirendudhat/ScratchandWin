import React from 'react';
import { ImageBackground, SafeAreaView, Text, View,Image, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={{height:'100%',width:'100%'}}>
     
      <View style={{height:'17%',width:'100%'}}> 
      <ImageBackground source={require('../assets/main_bg.jpg')} style={{height:'100%',width:'100%'}}>
          <Text style={{color:'#fff', fontSize:35,textAlign:"center",marginTop:'12%',fontWeight:'bold'}}>REDEEM</Text>
      </ImageBackground>
      </View>
     
      <View style={{flexDirection:'row',height:'10%',marginHorizontal:'20%',marginTop:'8%'}}>
        <Image style={{height:'60%',width:'50%',marginRight:'5%'}} source={require('../assets/paytm.png')}></Image>
        <Image style={{height:'60%',width:'50%',}} source={require('../assets/pubg.png')}></Image>
      </View>
     
      <View> 
        <Text style={{alignSelf:'center'}}>*To Redeem You Must have {'\u20B9'}2000</Text>
        <Text style={{alignSelf:'center'}}>in yuor Wallet</Text>   
      </View>
      
      <View style={{height:'100%',marginHorizontal:25}}>
        <TextInput style={{height:'7%',width:'100%',backgroundColor:'#f3f3f3',marginTop:30,borderColor:'#d9d9d9',borderWidth:1,borderRadius:10,paddingLeft:20}}
                    placeholder={'Enter Email'}></TextInput>
        <TextInput style={{height:'7%',width:'100%',backgroundColor:'#f3f3f3',marginTop:30,borderColor:'#d9d9d9',borderWidth:1,borderRadius:10,paddingLeft:20}}
                    placeholder={'Enter Mobile No.'}></TextInput>
        <TextInput style={{height:'7%',width:'100%',backgroundColor:'#f3f3f3',marginTop:30,borderColor:'#d9d9d9',borderWidth:1,borderRadius:10,paddingLeft:20}}
                    placeholder={'Enter Amount'}></TextInput>
        <TouchableOpacity style={{height:'7%',width:'100%',backgroundColor:'#323abd',marginTop:30,borderColor:'#d9d9d9',borderWidth:1,borderRadius:10,paddingLeft:20}}>
          <Text style={{color:'#fff',textAlign:"center",fontWeight:'bold',fontSize:25,marginTop:10,marginRight:10}}> LOGIN</Text>  
        </TouchableOpacity>  
      </View>  

    </SafeAreaView>
  );
}