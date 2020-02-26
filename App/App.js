import React, { Component } from 'react';
import Top from './component/topbar';
import {StyleSheet, View, Image} from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={{backgroundColor: 'white',color: 'black'}}>

          {/*logo*/} 
          <View style={{alignItems: 'center',marginTop: 45}}>
            <Image
              style={{height: 42, width: 290,}}
              source={{uri: 'https://i.goopics.net/XKvdl.png'}}
              resizeMode="contain"
            />
          </View>

          {/*boxUser*/}
          <View style={{flex: 1,alignItems: 'center'}}>
            <View style={styles.userBox}>
                <View style={styles.shadow}><Image
                  style={styles.userImg}
                  source={{uri: 'https://i.goopics.net/y2OdD.png'}}
                  resizeMode="cover"
                /></View>
                <View style={styles.userPrix}>

                </View>
                <View style={styles.userInfo}>
                  
                </View>
            </View>
          </View> 
      </View>
    );
  }
}

const styles = StyleSheet.create({
  userBox: {
      backgroundColor: 'white',
      marginTop: 50,
      width: 345,
      height: 390,
      alignItems: 'center',
  },

  userImg: {
    width: 320,
    height: 360,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#9bc3e2',
  },

  userPrix: {
    width: 100,
    height: 20,
    backgroundColor: 'black',
    position: 'relative',
    top: -45,
  },

  shadow:{
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5,
  },

  userInfo: {
    width: 340,
    height: 80,
    backgroundColor: 'white',
    opacity: 0.74,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5,

    position: 'relative',
    top: -65,
    borderRadius: 5,
  }
  
})
