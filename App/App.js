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
//                              *     version 1.0.13    *                            |
//                              *                       *                            |
//                              * * * * * * * * * * * * *                            |
//                                                                                   |
//___________________________________________________________________________________|


//Navigation [\!/] doit rester le première import [\!/]
import 'react-native-gesture-handler';

//react nativ
import * as React from 'react';
import {StyleSheet, View, Image, Text, ScrollView, SafeAreaView, Dimensions, Button, Alert, TextInput} from 'react-native';
import {Platform, StyleSheet, View, Image, Text, ScrollView, SafeAreaView, Dimensions, Button, Alert, TextInput} from 'react-native';

//scroll
import Constants from 'expo-constants';

//icone
import Icone from 'react-native-vector-icons/FontAwesome5';

//navigation
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderBackButton } from '@react-navigation/stack';

//shadow (android)
import {BoxShadow} from 'react-native-shadow';

//fonts
import * as Font from 'expo-font';

//largeur max en fontion de la taille de l'ecran
var full = Dimensions.get('window').width;


//  /~~~\/~~\/~~~\/~~~\/~~\/~~~\                    /~~~\/~~\/~~~\/~~~\/~~\/~~~\
//  | /\/ /\/ /\ || /\/ /\/ /\ |                    | /\ \/\ \/\ || /\ \/\ \/\ |
//  \ \/ /\/ /\/ /\ \/ /\/ /\/ /   DEBUT DES PAGES  \ \/\ \/\ \/ /\ \/\ \/\ \/ /
//   \ \/\ \/\ \/  \ \/\ \/\ \/     ET DU DESIGN     \/ /\/ /\/ /  \/ /\/ /\/ /
// ,_/\ \/\ \/\ \__/\ \/\ \/\ \______________________/ /\/ /\/ /\__/ /\/ /\/ /\_,
// (__/\__/\__/\____/\__/\__/\________________________/\__/\__/\____/\__/\__/\__)

//page d'accueil
function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
    <ScrollView>
    <View style={{backgroundColor: 'white',flex: 1}}>

        {/*logo*/} 
        <View style={{flex:3,backgroundColor: 'red'}}></View>
        <View style={{alignItems: 'center',flex: 1}}>
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
        <View style={[styles.boxbtnnav, {borderRightWidth: 1,borderColor: 'black',}]}><Text style={styles.txtnav} onPress={() => navigation.navigate('Test')}>mon compte</Text></View>
        <View style={styles.boxbtnnav}><Text style={styles.txtnav2} onPress={() => Alert.alert('Mes menthor')}>mes menthor</Text></View>
    </View>
  </SafeAreaView>
  );
}


//page Fitres
function FiltreScreen({ navigation }) {

  //instances options input
  const [value, onChangeText] = React.useState('Useless Placeholder');

  return (
    <View style={{ flex: 1,backgroundColor: 'white'}}>
       <TextInput style={stylesF.input} placeholder='Test' onChangeText={text => onChangeText(text) }value={value}/>
       <View style={{width: full,height:50,alignItems: 'center'}}><View style={stylesF.btnFiltre}><Text style={{color:'white',fontSize: 25}}>Filtrer </Text><Icone style={{fontSize:20,color: 'white',position: 'relative',left: 30,top:2.5}} name={'sign-out-alt'} /></View></View>
    </View>
  );
}

function TestScreen({ navigation }) {

  return (
    <View style={{ flex: 1,}}>
        <View style={{ flex: 2,}}>

          {/*logo*/} 
          <View style={{alignItems: 'center',flex: 1,justifyContent:'flex-end'}}>
            <Image
              style={{height: 42, width: '70%',}}
              source={{uri: 'https://i.goopics.net/XKvdl.png'}}
              resizeMode="contain"
            />
          </View>

        </View>
        <View style={{ flex: 14,alignItems: 'center' }}>

            {/*filtres*/}
            <View style={styles.filtrebar}>
              <View style={styles.fitretxt}><Text style={{fontSize:17,/*fontFamily: 'Montserrat'*/}}>Filtres</Text></View>
              <View style={styles.fitrelist}><View style={styles.filtreadd}><Text style={{justifyContent:'center'}}><Icone style={{fontSize:12,color: '#292929'}} name={'times-circle'} /> test</Text></View></View>
              <View style={styles.fitrebtn}><Icone style={{fontSize:30,color: '#292929'}} name={'plus-circle'} onPress={() => navigation.navigate('Filtre')} /></View>
            </View>

            {/*boxUser*/}
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
        <View style={{ flex: 2, backgroundColor: 'blue' }}>
            {/*navbar*/} 
            <View style={styles.centernav}><View style={styles.centerbtn2}><View accessibilityRole='button'  style={styles.centerbtn}><Icone onPress={() => navigation.navigate('Home')} style={{fontSize:55,color: 'black'}} name={'user-tie'} /></View></View></View>
            <View style={styles.nav}>
                <View style={[styles.boxbtnnav, {borderRightWidth: 1,borderColor: 'black',}]}><Text style={styles.txtnav} onPress={() => navigation.navigate('Test')}>mon compte</Text></View>
                <View style={styles.boxbtnnav}><Text style={styles.txtnav2} onPress={() => Alert.alert('Mes menthor')}>mes menthor</Text></View>
            </View>
        </View>
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
  render() {
  return (
    <NavigationContainer style={{backgroundColor: 'white'}}>
      <Stack.Navigator >
        <Stack.Screen name="Home" options={{ headerHideShadow: false,headerStyle:{ backgroundColor: 'white' },headerShown: false }} component={HomeScreen} />
        <Stack.Screen name="Filtre" options={{ headerBackTitle: "Retour", headerStyle: {backgroundColor: '#292929',},headerTintColor: '#fff',headerTitleStyle: {fontWeight: 'bold',},} } component={FiltreScreen} />
        <Stack.Screen name="Test" options={{ headerHideShadow: false,headerStyle:{ backgroundColor: 'white' },headerShown: false }} component={TestScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );}
}

//css | design HomeScreen
const styles = StyleSheet.create({
  filtrebar:{
    backgroundColor:'white',
    width: '80%',
    height: 35,
    borderRadius: 100,
    marginTop: 20,
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
    width: '21%',
    height: 35,
    backgroundColor: '#ebebeb',
    borderRadius: 100,
    justifyContent:'center',
    alignItems: 'center'
  },

  fitrelist:{
    width: '65%',
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

    ...Platform.select({
      ios: {
        marginTop:2.5,
        marginLeft: 9
      },
      android: {
        marginTop:1.5,
        marginLeft: 3
      },
    }),
    
  },

  userBox: {
      marginTop: 15,
      width: '85%',
      ...Platform.select({
        ios: {
          height: 370,
        },
        android: {
          height: 320,
        },
      }),
      alignItems: 'center',
  },

  userImg: {
    width: '100%',
    height: '100%',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#9bc3e2',
  },

  userPrix: {
    width: '35%',
    height: 35,
    backgroundColor: 'black',
    position: 'relative',
    top: -50,
    zIndex: 10,
    right: -90,
    borderRadius: 100,
    alignItems: 'center',

    ...Platform.select({
      ios: {
        paddingBottom: 10,
        paddingTop: 9,
      },
      android: {
        paddingBottom: 10,
        paddingTop: 7,
      },
    }),
    
  },

  shadow:{
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5,

    width:'93%',
    height:'90%'
  },

  userInfo: {
    width: '100%',
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
  },

  nav: {
    position: "absolute",
    bottom: -45,
    backgroundColor: 'white',
    width: full,
    height: 70,
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

const stylesF = StyleSheet.create({
  btnFiltre:{
    backgroundColor: '#292929',
    borderRadius: 100,
    width: 180,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  }
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