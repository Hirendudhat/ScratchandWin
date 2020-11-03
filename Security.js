// import React, {Component} from 'react';
// import { View, Text } from 'react-native';
// import CryptoJS from "react-native-crypto-js";


// var AES = require("react-native-crypto-js").AES;
// var SHA256 = require("react-native-crypto-js").SHA256;

// console.log(SHA256("Message"));

// function decryptdata() {
//     // Decrypt
//     let bytes  = CryptoJS.AES.decrypt(ciphertext, 'secret key 123');
//     let originalText = bytes.toString(CryptoJS.enc.Utf8);
    
//     console.log(originalText); // 'my message'
// }

// function encryptdata(params) {
//     // Encrypt
//     let ciphertext = CryptoJS.AES.encrypt('my message', 'secret key 123').toString();
// }

// export default class extends Component {

    
//     abc = () => {
//         hello
//     }   
   
//     render() {
        
//         return(
//             <View>
//                 <Text> {abc}</Text>
//             </View>
//         );
//     }
// }
import React, { Component } from 'react';
 
import { StyleSheet, Platform, View, ActivityIndicator, FlatList, Text, Image, Alert,TouchableOpacity } from 'react-native';
 
export default class Project extends Component {
 constructor(props) {
   super(props);
   this.state = {
     isLoading: true
   }
 }

 componentDidMount(){

    return fetch('https://www.radiosbackend.com/radioperu/index.php/endpoint/categories/get?X-API-KEY=9Td3wkoVHZakyrpi3AmuDOMhK')
         .then((response) => response.json())
         .then((responseJson) => {
          //console.log(responseJson);
           this.setState({
             isLoading: false,
             dataSource: responseJson
           }, function() {
          // In this block you can do something with new state.
           });
         })
         .catch((error) => {
           console.error(error);
         });
 }
 
 render() {
   if (this.state.isLoading) {
     return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
         <ActivityIndicator size="large" />
       </View>
     );
   }
 
   return (
     <View style={styles.MainContainer}>
       <FlatList
          data={ this.state.dataSource }
          numColumns={2}
          renderItem={({item}) => 
            <View style={{flex:1, flexDirection: 'column', backgroundColor:'white', margin:10, borderRadius:10}} onStartShouldSetResponder={() =>this.props.navigation.navigate('New')}>
              <Image source = {{ uri: item.url_covercat }} style={styles.imageView} />
              <Text style={styles.textView} >{item.name}</Text>
            </View>
          }
          keyExtractor={(item, index) => index.toString()} 
        />
     </View>
   );
 }
}
 
const styles = StyleSheet.create({
MainContainer : {
  justifyContent: 'center',
  flex:1
},
 
imageView: {
  width: '100%',
  height: 100 ,
  borderTopLeftRadius:10,
  borderTopRightRadius:10  
},
 
textView: {
  width:'100%', 
  textAlignVertical:'center',
  padding:10,
  color: '#000',
  textAlign:'center'
}
});