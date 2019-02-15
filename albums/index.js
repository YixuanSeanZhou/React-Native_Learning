/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

// import {AppRegistry} from 'react-native';
// import App from './App';
// import {name as appName} from './app.json';
//
// AppRegistry.registerComponent(appName, () => App);

import React from 'react';
import { AppRegistry, StyleSheet, View } from 'react-native';
import Header from './src/components/Header.js';
import AlbumList from './src/components/AlbumList.js';

// Create registerComponen


const App = () => {
  return (
    <View style={styles.container}>
      <Header headerText={'Albums'} />
      <AlbumList />
    </View>
  );
};

// Passing property ( props )

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center',
    //alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('albums', () => App);
