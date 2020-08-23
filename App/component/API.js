import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import {ActivityIndicator,StyleSheet, View, Image, Text, ScrollView, SafeAreaView, Dimensions, Button, Alert, TextInput,component} from 'react-native';
import Constants from 'expo-constants';
import Icone from 'react-native-vector-icons/FontAwesome5';

var full = Dimensions.get('window').width;


export default App = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://momenthor.fr:8006/mentor/?format=json', {
      method: 'GET'

    }
    )
      .then((response) => response.json())
      .then((json) => setData(json.movies))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

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
};

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