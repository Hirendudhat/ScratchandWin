// import React from 'react';
// import { ImageBackground, SafeAreaView, StyleSheet, Text, View,TouchableOpacity,Image } from 'react-native';

// export default function App() {
//   return (
//     <SafeAreaView style={styles.container}>
//       <ImageBackground style={{height:'100%',width:'100%'}} source={require('../assets/main_bg.jpg')}>
//         <View style={{alignItems:'center'}}>
//             <Text style={{marginTop:'20%',fontWeight:'bold',fontSize:25,color:'#fff'}}>SCRATCH AND EARN</Text>
              
//               <Image style={{height:'40%',width:'90%',marginTop:'15%'}} source={require('../assets/scratch_card.png')}></Image>
              
//         </View>
//       </ImageBackground>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       backgroundColor: '#fff',
//       alignItems: 'center',
//       justifyContent: 'center',
//     },
//   });

import React, { Component } from 'react';
import { View } from 'react-native';
import ScratchView from 'react-native-scratch'
 
class MyView extends Component {
 
    onImageLoadFinished = ({ id, success }) => {
        // Do something
    }
 
    onScratchProgressChanged = ({ value, id }) => {
        // Do domething like showing the progress to the user
    }
 
    onScratchDone = ({ isScratchDone, id }) => {
        // Do something
    }
 
    onScratchTouchStateChanged = ({ id, touchState }) => {
        // Example: change a state value to stop a containing
        // FlatList from scrolling while scratching
        this.setState({ scrollEnabled: !touchState });
    }
 
    render() {
        return (
        <View style={{ width: 300, height: 300 }}>

            <ScratchView
                id={1} // ScratchView id (Optional)
                brushSize={10} // Default is 10% of the smallest dimension (width/height)
                threshold={70} // Report full scratch after 70 percentage, change as you see fit. Default is 50
                fadeOut={false} // Disable the fade out animation when scratch is done. default is true
                placeholderColor="#AAAAAA" // Scratch color while image is loading (or while image not present)
                imageUrl="http://yourUrlToImage.jpg" // the url to your image (Optional)
                onImageLoadFinished={this.onImageLoadFinished} // Event to indicate that the image has done loading
                onTouchStateChanged={this.onTouchStateChangedMethod} // Touch event (to stop a containing FlatList from scrolling for example)
                onScratchProgressChanged={this.onScratchProgressChanged} // Scratch progress event while scratching
                onScratchDone={this.onScratchDone} // Scratch is done event
            />
        </View>
        )
    }
  }
  export default MyView