//Navigation [\!/] doit rester le première import [\!/]
import 'react-native-gesture-handler';

//react nativ
import React, { Component } from 'react';
import {StyleSheet, View, Image, Text, ScrollView, SafeAreaView, Dimensions, Button, Alert} from 'react-native';


//scroll
import Constants from 'expo-constants';

//icone
import Icone from 'react-native-vector-icons/FontAwesome5';


//largeur max en fontion de la taille de l'ecran
var full = Dimensions.get('window').width;

//main app
class Main extends React.Component {
  render() {
    return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
      <View style={{backgroundColor: 'white',}}>

          {/*logo*/} 
          <View style={{alignItems: 'center',marginTop: 10}}>
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
      {/*navbar*/} 
      <View style={styles.centernav}><View style={styles.centerbtn2}><View accessibilityRole='button'  style={styles.centerbtn}><Icone onPress={() => Alert.alert('Mon compte')} style={{fontSize:55,color: 'black'}} name={'user-tie'} /></View></View></View>
      <View style={styles.nav}>
          <View style={[styles.boxbtnnav, {borderRightWidth: 1,borderColor: 'black',}]}><Text style={styles.txtnav} onPress={() => Alert.alert('Mon compte')}>mon compte</Text></View>
          <View style={styles.boxbtnnav}><Text style={styles.txtnav2} onPress={() => navigation.navigate('Details')}>mes menthor</Text></View>
      </View>
    </SafeAreaView>
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
    backgroundColor: 'white',
    position: 'relative',
    top: -45
  },

  nav: {
    position: "absolute",
    bottom: -45,
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
    height:90,
    paddingTop:30,
  },

  txtnav2:{
    textAlign: "center",
    fontSize: 20,
    paddingLeft:40,
    height:90,
    paddingTop:30,
  },

  centernav: {
    width: full,
    height: 0,
    position: 'relative',
    top: -90,
    zIndex: 10,
    alignItems: 'center',
    backgroundColor: 'red'
    
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

export default Main