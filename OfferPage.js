import React from 'react';
import { ImageBackground, SafeAreaView, Text, View, TouchableOpacity, Image } from 'react-native';

export default function App() {
  return (
    <SafeAreaView>
      <ImageBackground style={{ height: '100%', width: '100%' }} source={require('../assets/main_bg.jpg')}>
        <View style={{ alignItems: 'center' }}>
          <Text style={{ marginTop: '20%', fontWeight: 'bold', fontSize: 25, color: '#fff' }}>SCRATCH AND EARN</Text>
        </View>

        <View style={{ flexDirection: "row", backgroundColor: '#fff', height: '10%', width: '94%', marginLeft: '3%', borderRadius: 10 }}>
          <Image style={{ height: '70%', width: '14%', alignSelf: "center", marginLeft: 10, borderRadius: 10 }} source={require('../assets/main_bg.jpg')} />
          <View style={{ alignSelf: "center" }}>
            <Text>DUBSHOOT App</Text>
            <Text>Install dubshoot and earn more gift</Text>
          </View>
          <TouchableOpacity style={{ alignSelf: "center", backgroundColor: 'blue', borderRadius: 10 }}>
            <Text>INSTALL</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>  
    </SafeAreaView>
  );
}

//  import React, {Component} from 'react';
//  import { View, Text, StyleSheet, ActivityIndicator, FlatList, Image, } from 'react-native';
//  import CryptoJS from "react-native-crypto-js";
//  import base64 from 'react-native-base64'
// import { TouchableOpacity } from 'react-native-gesture-handler';

// function decryptdata() {
//   var AES = require("react-native-crypto-js").AES;
//   var SHA256 = require("react-native-crypto-js").SHA256;

//   console.log(SHA256("Message"));

//   // Decrypt
//     let bytes  = CryptoJS.AES.decrypt(ciphertext, 'AES/ECB/PKCS5Padding');
//     let originalText = bytes.toString(CryptoJS.enc.Utf8);

//     console.log(originalText); // 'my message'
// }

// function encryptdata(params) { 
//     // Encrypt
//     let ciphertext = CryptoJS.AES.encrypt('my message', 'AES/ECB/PKCS5Padding').toString();
// }

// function decode() {

//   var a='hiren dudhat';

//   console.log(a);

//     return fetch('https://captchawork.ga/captch_app/v1/api/login.php')
//          .then((response) => response.text())
//          .then((responseJson) => {

//        //   console.log(responseJson);

//         //  let bytes  = CryptoJS.AES.decrypt(responseJson, 'AES/ECB/PKCS5Padding');
//         //  let originalText = bytes.toString(CryptoJS.enc.Utf8);

//           var decodevalue = base64.decode(responseJson);

//           console.log(decodevalue);

//           base64.encode('Some string to encode to base64');
//           console.log()
//         //  console.log(originalText);
//         //  console.log(bytes);

//          })
//          .catch((error) => {
//            console.error(error);
//          });
// }

// export default class Project extends Component {
//  constructor(props) {
//    super(props);
//    this.state = {
//     // isLoading: ''
//    }
//  }

// //  componentDidMount(){

// //     return fetch('https://captchawork.ga/captch_app/v1/api/login.php')
// //          .then((response) => response.json())
// //          .then((responseJson) => {

// //           console.log(responseJson);

// //           base64.decode('aIbdNmfPPGX/a8blalCQwyYkufjzRB4DsE9eo+encnaywMuWmY=aqwdarcam')

// //           var a='hiewn';
// //           console.log(a);

// //            this.setState({
// //              isLoading: false,
// //              dataSource: originalText
// //            }, function() {
// //           // In this block you can do something with new state.
// //            });
// //          })
// //          .catch((error) => {
// //            console.error(error);
// //          });
// //  }

//  render() {
//    if (this.state.isLoading) {
//      return (
//       <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
//          <ActivityIndicator size="large" />
//        </View>
//      );
//    }

//    return (
//      <View style={styles.MainContainer}>

//        <TouchableOpacity onPress={decode}>
//         <Text>click here</Text>
//        </TouchableOpacity>

//          {/* <FlatList
//           data={ this.state.dataSource }
//           numColumns={2}
//           renderItem={({item}) => 
//             <View style={{flex:1, flexDirection: 'column', backgroundColor:'white', margin:10, borderRadius:10}} onStartShouldSetResponder={() =>this.props.navigation.navigate('New')}>
//               <Image source = {{ uri: item.url_covercat }} style={styles.imageView} />
//               <Text style={styles.textView} >{item.name}</Text>
//               <Text> {item.data} </Text>
//             </View>
//           }
//           keyExtractor={(item, index) => index.toString()} 
//         /> */}

//      </View>
//    );
//  }
// }

// const styles = StyleSheet.create({
// MainContainer : {
//   justifyContent: 'center',
//   alignItems:"center",
//   flex:1,
//   marginTop:20
// },

// imageView: {
//   width: '100%',
//   height: 100 ,
//   borderTopLeftRadius:10,
//   borderTopRightRadius:10  
// },

// textView: {
//   width:'100%', 
//   textAlignVertical:'center',
//   padding:10,
//   color: '#000',
//   textAlign:'center'
// }
// });