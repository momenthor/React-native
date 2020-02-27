//                                                __    __                           |
//     /'\_/`\                                   /\ \__/\ \                          |
//    /\      \    ___     ___ ___      __    ___\ \ ,_\ \ \___     ___   _ __       |
//    \ \ \__\ \  / __`\ /' __` __`\  /'__`\/' _ `\ \ \/\ \  _ `\  / __`\/\`'__\     |
//     \ \ \_/\ \/\ \L\ \/\ \/\ \/\ \/\  __//\ \/\ \ \ \_\ \ \ \ \/\ \L\ \ \ \/      |
//      \ \_\\ \_\ \____/\ \_\ \_\ \_\ \____\ \_\ \_\ \__\\ \_\ \_\ \____/\ \_\      |
//       \/_/ \/_/\/___/  \/_/\/_/\/_/\/____/\/_/\/_/\/__/ \/_/\/_/\/___/  \/_/      |            
//                       ______                                                      |
//                      /\  _  \                                                     |
//                      \ \ \L\ \  _____   _____                                     |
//                       \ \  __ \/\ '__`\/\ '__`\                                   |
//                        \ \ \/\ \ \ \L\ \ \ \L\ \                                  |
//                         \ \_\ \_\ \ ,__/\ \ ,__/                                  |
//                          \/_/\/_/\ \ \/  \ \ \/                                   |
//                                   \ \_\   \ \_\                                   |
//                                    \/_/    \/_/                                   |
//                                                                                   |
//                                                                                   |
//                                * * * * * * * * * * * * *                          |
//                                *                       *                          | 
//                                *     version 1.0.12    *                          |
//                                *                       *                          |
//                                * * * * * * * * * * * * *                          |
//                                                                                   |
//___________________________________________________________________________________|

//Navigation [\!/] doit rester le première import [\!/]
import 'react-native-gesture-handler';

//react nativ
import React, { Component } from 'react';
import Top from './component/topbar';
import {StyleSheet, View, Image, Text, ScrollView, SafeAreaView, Dimensions, Button, Alert} from 'react-native';

//scroll
import Constants from 'expo-constants';

//icone
import Icone from 'react-native-vector-icons/FontAwesome5';

//navigation
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//largeur max en fontion de la taille de l'ecran
var full = Dimensions.get('window').width;

//main app
export default class App extends Component {
  render() {
    return (
    <NavigationContainer>
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

      {/*navbar*/} 
      <View style={styles.centernav}><View style={styles.centerbtn2}><View accessibilityRole='button' style={styles.centerbtn}><Icone style={{fontSize:55,color: 'black'}} name={'user-tie'} /></View></View></View>
      <View style={styles.nav}>
          <View style={[styles.boxbtnnav, {borderRightWidth: 1,borderColor: 'black',}]}><Text style={styles.txtnav} onPress={() => Alert.alert('Mon compte')}>mon compte</Text></View>
          <View style={styles.boxbtnnav}><Text style={styles.txtnav2} onPress={() => Alert.alert('Mes menthor')}>mes menthor</Text></View>
      </View>
    </NavigationContainer>
    );
  }
}


//css | design
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

  nav: {
    position: "absolute",
    bottom: 0,
    backgroundColor: 'white',
    width: full,
    height: 90,
    flex: 1,
    flexDirection: 'row',

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5,
  },

  boxbtnnav: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
  },
  
  txtnav:{
    textAlign: "center",
    fontSize: 20,
    paddingRight: 30,
  },

  txtnav2:{
    textAlign: "center",
    fontSize: 20,
    paddingLeft:40,
  },

  centernav: {
    width: full,
    height: 100,
    position: 'relative',
    zIndex: 10,
    top: -30,
    alignItems: 'center',
    
  },
  centerbtn: {
    backgroundColor: 'white',
    borderRadius: 100,
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1.5,
    borderColor: 'black',
  },

  centerbtn2: {
    backgroundColor: 'white',
    borderRadius: 105,
    width: 105,
    height: 105,
    alignItems: 'center',
    justifyContent: 'center',

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5,
  },

})

























//                          /[-])//  ___
//                     __ --\ `_/~--|  / \
//                   /_-/~~--~~ /~~~\\_\ /\
//                   |  |___|===|_-- | \ \ \
// _/~~~~~~~~|~~\,   ---|---\___/----|  \/\-\
// ~\________|__/   / // \__ |  ||  / | |   | |
//          ,~-|~~~~~\--, | \|--|/~|||  |   | |
//          [3-|____---~~ _--'==;/ _,   |   |_|
//                      /   /\__|_/  \  \__/--/
//                     /---/_\  -___/ |  /,--|
//                     /  /\/~--|   | |  \///
//                    /  / |-__ \    |/
//                   |--/ /      |-- | \
//                  \^~~\\/\      \   \/- _
//                   \    |  \     |~~\~~| \
//                    \    \  \     \   \  | \
//                      \    \ |     \   \    \
//                       |~~|\/\|     \   \   |
//                      |   |/         \_--_- |\
//                      |  /            /   |/\/
//                       ~~             /  /
//                                     |__/
//                    
//                     Vers l'infini et au-delà
//                     © - 2020 MomenthorStudio