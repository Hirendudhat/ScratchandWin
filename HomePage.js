import React from 'react';
import { Component } from 'react';
import { ImageBackground, SafeAreaView, StyleSheet, Text, View,TouchableOpacity,Image } from 'react-native';

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
     
     <ImageBackground style={{height:'100%',width:'100%'}} source={require('../assets/main_bg.jpg')}>
        
        <View style={{alignItems:'center'}}>
            <Text style={{marginTop:'25%',fontWeight:'bold',fontSize:25,color:'#fff'}}>SCRATCH AND EARN</Text>
          
            <View style={styles.view}>
            <TouchableOpacity style={styles.buttonGPlusStyle} activeOpacity={0.5}
                    onPress={() => this.props.navigation.navigate('QuickOfferPage')}>
              <Image source={require('../assets/quick_offer_btn.png')} style={styles.buttonImageIconStyle}/>
              <Text style={styles.buttonTextStyle}>Quick Offer</Text>
            </TouchableOpacity>
            </View>
          
            <View style={styles.view1}>
            <TouchableOpacity style={styles.buttonGPlusStyle} activeOpacity={0.5}
                    onPress={() => this.props.navigation.navigate('SpinAndWin')}>
              <Image source={require('../assets/spin_btn.png')} style={styles.buttonImageIconStyle}/>
              <Text style={styles.buttonTextStyle}>Spin And Win</Text>
            </TouchableOpacity>
            </View>
          
            <View style={styles.view2}>
            <TouchableOpacity style={styles.buttonGPlusStyle} activeOpacity={0.5}
                    onPress={() => this.props.navigation.navigate('ScratchAndWinPage')}>
              <Image source={require('../assets/scratch_btn.png')} style={styles.buttonImageIconStyle}/>
              <Text style={styles.buttonTextStyle}>Scratch And Win</Text>
            </TouchableOpacity>
            </View>
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
  buttonGPlusStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    height: '100%',
  },
  buttonIconSeparatorStyle: {
    backgroundColor: '#fff',
    width: 1,
    height: 40,
  },
  buttonImageIconStyle: {
    height: '100%',
    width: 80,
    borderTopLeftRadius:10,
    borderBottomLeftRadius:10,
    resizeMode: 'stretch',
  },
  buttonTextStyle: {
    color: '#fff',
    marginBottom: 4,
    marginLeft:15,
    fontSize:20,
    fontWeight:'bold'    
  },
  view:{
    flexDirection: 'row',
    alignItems: 'center',
    height: '15%',
    borderRadius: 10,
    width:'90%',
    backgroundColor:'#df3449',
    marginTop:25
  },
  view1:{
    flexDirection: 'row',
    alignItems: 'center',
    height: '15%',
    borderRadius: 10,
    width:'90%',
    backgroundColor:'#f39639',
    marginTop:20
  },
  view2:{
    height: '15%',
    borderRadius: 10,
    width:'90%',
    backgroundColor:'#829525',
    marginTop:20
  }
});