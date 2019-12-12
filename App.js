/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, Button } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import firestore from '@react-native-firebase/firestore';
import AppNavigator from './src/navigator';
import AsyncStorage from '@react-native-community/async-storage';

function App(props) {
  let storeData = async (key, value) => {
    try {
      await AsyncStorage.setItem(key, value);
    } catch (e) {
      console.log(e);
    }
  };

  let getData = async key => {
    let data;
    try {
      data = await AsyncStorage.getItem(key);
    } catch (e) {
      console.log(e);
    }
    return data;
  };

  let [phone, setPhone] = useState('');

  useEffect(() => {
    let asyncFunc = async () => {
      const querySnapshot = await firestore()
        .collection('Doors')
        .get();
      console.log(querySnapshot.size);
    };
    let checkForPhone = async () => {
      let data = await getData('phone');
      setPhone(data);
    };

    asyncFunc();
  });

  return <AppNavigator />;
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
