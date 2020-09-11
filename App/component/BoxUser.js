import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  Text,
  View,
  ScrollView,
  Dimensions,
  Image,
  RefreshControl,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import Constants from 'expo-constants';
import Icone from 'react-native-vector-icons/FontAwesome5';


var full = Dimensions.get('window').width;

const wait = (timeout) => {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
};

export default App = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);

    wait(2000).then(() => setRefreshing(false));
  }, []);

  useEffect(() => {
    fetch('http://momenthor.fr:8006/mentor/')
      .then((response) => response.json())
      .then((json) => setData(json.results))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <SafeAreaView>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <View style={{ flex: 1, padding: 10,marginBottom:170 }}>
          {isLoading ? (
            <ActivityIndicator />
          ) : (
            <FlatList
              data={data}
              keyExtractor={({ nom }, index) => nom}
              renderItem={({ item }) => (
                <View style={{flex: 1,alignItems: 'center',marginBottom: 50}}>

                  <View style={styles.userBox} >

                      <View style={styles.shadow}><Image style={styles.userImg} source={{uri: 'https://i.goopics.net/y2OdD.png'}} resizeMode="cover"/></View>

                      <View style={styles.userPrix}>

                        <Text style={{color: 'white',/*fontFamily: 'Montserrat'*/}}>{item.tarifHeure}€ / Heure</Text>
                      </View>

                      <View style={styles.userInfo}>
                        <Text style={{fontSize: 25,/*fontFamily: 'Montserrat'*/}}>{item.prenom} {item.nom}</Text>
                        <Text style={{fontSize: 16,/*fontFamily: 'Montserrat',*/marginBottom: 5,}}>{item.poste}, {item.age} ans</Text>
                        <Text style={{fontSize: 15,/*fontFamily: 'Montserrat'*/}}><Icone style={{fontSize:15,color: '#0984e3'}} name={'map-marker-alt'} /> {item.ville}</Text>
                      </View> 

                  </View>

                </View>
              )}
            />
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({

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
  }

})