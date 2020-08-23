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
//                              * * * * * * * * * * * * *                            |
//                              *                       *                            | 
//                              *     version 1.0.14    *                            |
//                              *                       *                            |
//                              * * * * * * * * * * * * *                            |
//                                                                                   |
//___________________________________________________________________________________|


//Navigation [\!/] doit rester le première import [\!/]
import 'react-native-gesture-handler';

//react nativ
import React, { useEffect, useState } from 'react';
import {ActivityIndicator,StyleSheet, View, Image, Text, ScrollView, SafeAreaView, Dimensions, Button, Alert, TextInput,component} from 'react-native';


//scroll
import Constants from 'expo-constants';


//icone
import Icone from 'react-native-vector-icons/FontAwesome5';

//navigation
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderBackButton } from '@react-navigation/stack';

//fonts
import * as Font from 'expo-font';


//import Api from './component/API';
//largeur max en fontion de la taille de l'ecran
var full = Dimensions.get('window').width;

//  /~~~\/~~\/~~~\/~~~\/~~\/~~~\-_-_-_-_-_-_-_-_-_-_-/~~~\/~~\/~~~\/~~~\/~~\/~~~\
//  | /\/ /\/ /\ || /\/ /\/ /\ |                     | /\ \/\ \/\ || /\ \/\ \/\ |
//  \ \/ /\/ /\/ /\ \/ /\/ /\/ /    Page et design   \ \/\ \/\ \/ /\ \/\ \/\ \/ /
//   \ \/\ \/\ \/  \ \/\ \/\ \/       Momenthor       \/ /\/ /\/ /  \/ /\/ /\/ /
// ,_/\ \/\ \/\ \__/\ \/\ \/\ \_______________________/ /\/ /\/ /\__/ /\/ /\/ /\_,
// (__/\__/\__/\____/\__/\__/\_________________________/\__/\__/\____/\__/\__/\__)

//page d'accueil
function HomeScreen({ navigation }) {

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

        {/*filtres*/}

        <View style={{width: full,alignItems: 'center'}}>
          <View style={styles.filtrebar}>
            <View style={styles.fitretxt}><Text style={{fontSize:17,/*fontFamily: 'Montserrat'*/}}>Filtres</Text></View>
            <View style={styles.fitrelist}><View style={styles.filtreadd}><Text style={{justifyContent:'center'}}><Icone style={{fontSize:12,color: '#292929'}} name={'times-circle'} /> test</Text></View></View>
            <View style={styles.fitrebtn}><Icone style={{fontSize:30,color: '#292929'}} name={'plus-circle'} onPress={() => navigation.navigate('Filtre')} /></View>
          </View>
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
                <Text style={{color: 'white',/*fontFamily: 'Montserrat'*/}}>40€ / Heure</Text>
              </View>
              <View style={styles.userInfo}>
                <Text style={{fontSize: 25,/*fontFamily: 'Montserrat'*/}}>LUDOVIC</Text>
                <Text style={{fontSize: 16,/*fontFamily: 'Montserrat',*/marginBottom: 5,}}>Ceo cher fabook, 27 ans</Text>
                <Text style={{fontSize: 15,/*fontFamily: 'Montserrat'*/}}><Icone style={{fontSize:15,color: '#0984e3'}} name={'map-marker-alt'} /> Lyon</Text>
              </View> 
          </View>
        </View>
    </View>
    </ScrollView>

    {/*navbar*/} 
    <View style={styles.centernav}><View style={styles.centerbtn2}><View accessibilityRole='button'  style={styles.centerbtn}><Icone onPress={() => navigation.navigate('Home')} style={{fontSize:55,color: 'black'}} name={'user-tie'} /></View></View></View>
    <View style={styles.nav}>
        <View style={[styles.boxbtnnav, {borderRightWidth: 1,borderColor: 'black',}]}><Text style={styles.txtnav} onPress={() => Alert.alert('Mon compte')}>mon compte</Text></View>
        <View style={styles.boxbtnnav}><Text style={styles.txtnav2} onPress={() => Alert.alert('Mes menthor')}>mes menthor</Text></View>
    </View>
  </SafeAreaView>
  );
}


//page Fitres
function FiltreScreen({ navigation }) {

  //instances options input
  const [value, onChangeText] = React.useState('');
  const [value2, onChangeText2] = React.useState('');
  const [value3, onChangeText3] = React.useState('');

  return (
    <View style={{ flex: 1,backgroundColor: 'white'}}>

        <View style={stylesF.tri}>
          <Text style={stylesF.txtfiltres}>Mes filtres</Text>
        </View>

        <View style={{flexDirection: 'row',width: full,marginBottom: 20}}>
          <View style={stylesF.ville}>
            <Text style={stylesF.txtville}> <Icone style={{fontSize:20,color: 'black'}} name={'building'} /> Ville</Text>
          </View>
          <TextInput style={stylesF.inputV} placeholderTextColor = "grey" placeholder = "ville recherché" onChangeText={text => onChangeText(text) }value={value}/>
        </View>

        <View style={{flexDirection: 'row',width: full,marginBottom: 20}}>
          <View style={stylesF.ville}>
            <Text style={stylesF.txtville}> <Icone style={{fontSize:20,color: 'black',marginRight:5,marginLeft: -15,}} name={'euro-sign'} /> Prix</Text>
          </View>
          <TextInput style={stylesF.inputV} placeholderTextColor = "grey" placeholder = "pas d'ordre de prix" onChangeText={text => onChangeText2(text) }value={value2}/>
        </View>

        <View style={{flexDirection: 'row',width: full,marginBottom: 20}}>
          <View style={stylesF.ville}>
            <Text style={stylesF.txtville}><Icone style={{fontSize:20,color: 'black'}} name={'calendar-minus'} /> Date</Text>
          </View>
          <TextInput style={stylesF.inputV} placeholderTextColor = "grey" placeholder = "date recherché" onChangeText={text => onChangeText3(text) }value={value3}/>
        </View>

        <View style={stylesF.btnFiltre}><Text onPress={() => navigation.navigate('Home')} style={{color:'white',textAlign: 'center',fontSize: 35,padding: 10}}>Filtrer <Icone style={{fontSize:35,color: 'white',}} name={'sign-out-alt'} /></Text></View>
    </View>
  );
} 

const Stack = createStackNavigator();

export default class App extends React.Component {
  //componentDidMount() {
   // Font.loadAsync({
     // 'Montserrat': require('./assets/fonts/Montserrat-Regular.ttf'),
    //});
 // }
  render(){
    

  return (
    <NavigationContainer style={{backgroundColor: 'white'}}>
      <Stack.Navigator >
        <Stack.Screen name="Home" options={{ headerHideShadow: false,headerStyle:{ backgroundColor: 'white' },headerShown: false }} component={HomeScreen} />
        <Stack.Screen name="Filtre" options={{ headerBackTitle: "Retour", headerStyle: {backgroundColor: '#292929',},headerTintColor: '#fff',headerTitleStyle: {fontWeight: 'bold',},} } component={FiltreScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    );
  }
}

//css | design HomeScreen
const styles = StyleSheet.create({
  filtrebar:{
    backgroundColor:'white',
    width: 320,
    height: 35,
    borderRadius: 100,
    marginTop: 20,
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

  fitretxt: {
    width: 70,
    height: 35,
    backgroundColor: '#ebebeb',
    borderRadius: 100,
    justifyContent:'center',
    alignItems: 'center'
  },

  fitrelist:{
    width: 210,
    height: 35,
    marginLeft: 5,
    justifyContent: 'center',
    alignItems:'baseline',
  },

  filtreadd:{
    height: 20,
    backgroundColor:'#ebebeb',
    justifyContent: 'center',
    paddingLeft: 5,
    paddingRight: 10,
    borderRadius: 100
  },

  fitrebtn:{
    justifyContent:'center',
    marginTop:2.5,
    marginLeft: 2
  },

  userBox: {
      backgroundColor: 'white',
      marginTop: 15,
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
    /*fontFamily: 'Montserrat'*/
  },

  txtnav2:{
    textAlign: "center",
    fontSize: 20,
    paddingLeft:40,
    height:90,
    paddingTop:30,
    /*fontFamily: 'Montserrat'*/
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

//css | design filtre
const stylesF = StyleSheet.create({
  btnFiltre:{
    backgroundColor: '#292929',
    borderRadius: 100,
    marginLeft: 20,
    marginTop: 100,
    marginRight:20,
  },

  inputV:{
    justifyContent: 'center',
    backgroundColor: '#fafafa',
    marginLeft: -20,
    borderTopEndRadius: 50,
    borderBottomEndRadius: 50,
    fontSize: 20,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 30,
    paddingRight:20,
    width: '68%',

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5,
  },

  tri:{
    backgroundColor: 'white',
    marginBottom: 30,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5,
  },

  txtfiltres:{
    backgroundColor: '#dbdbdb',
    width:130,
    fontSize: 25,
    paddingTop:15,
    paddingBottom:15,
    textAlign: 'center',
  },

  ville:{
    backgroundColor: 'white',
    width: 100,
    borderRadius: 25,
    position: 'relative',
    marginLeft:25,
    zIndex: 100,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5,
  },

  txtville:{
    fontSize: 20,
    padding: 10,
    textAlign: 'center'
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