import React, { Component } from 'react';
import Top from './component/topbar';
import {View, Image} from 'react-native';

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
          <View>
            <Image
              source={}
            />
          </View> 
      </View>
    );
  }
}
