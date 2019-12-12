import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import firebase from '@react-native-firebase/app';
import '@react-native-firebase/auth';
import { AuthService } from './services';

class SplashScreen extends React.Component {
  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      console.log('User', user);
      if (user) {
        AuthService.setUser(user);
        this.props.navigation.navigate('Main');
      } else {
        this.props.navigation.navigate('Login');
        // TODO: make sure check firebase for user doc
      }
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Splash Screen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SplashScreen;
