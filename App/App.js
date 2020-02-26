import React, { Component } from 'react';
import Top from './component/topbar';
import {StyleSheet, View, Image, Text, ScrollView, SafeAreaView} from 'react-native';
import Constants from 'expo-constants';
import Icone from 'react-native-vector-icons/FontAwesome5';

export default class App extends Component {
  render() {
    return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
      <View style={{backgroundColor: 'white',}}>
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
            <View style={styles.userBox} >
                <View style={styles.shadow}><Image
                  style={styles.userImg}
                  source={{uri: 'https://i.goopics.net/y2OdD.png'}}
                  resizeMode="cover"
                /></View>
                <View style={styles.userPrix}>
                  <Text style={{color: 'white'}}>40€ / Heure</Text>
                </View>
                <View style={styles.userInfo}>
                  <Text style={{fontSize: 25}}>LUDOVIC</Text>
                  <Text style={{fontSize: 16,marginBottom: 5,}}>Ceo cher fabook, 27 ans</Text>
                  <Text style={{fontSize: 15}}><Icone style={{fontSize:15,color: '#0984e3'}} name={'map-marker-alt'} /> Lyon</Text>
                </View> 
            </View>
          </View>
      </View>
      </ScrollView>
    </SafeAreaView>
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
    width: 110,
    height: 35,
    backgroundColor: 'black',
    position: 'relative',
    top: -50,
    zIndex: 10,
    right: -90,
    borderRadius: 100,
    alignItems: 'center',
    paddingBottom: 10,
    paddingTop: 9,
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
    paddingTop: 2,
    paddingLeft: 10,
    textTransform: "uppercase"
  },

  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
  
})
