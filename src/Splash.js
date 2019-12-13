import React, { useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import firebase from '@react-native-firebase/app';
import '@react-native-firebase/auth';
import '@react-native-firebase/firestore';
import { AuthService } from './services';
import { StackActions, NavigationActions } from 'react-navigation';

function SplashScreen(props) {
  useEffect(() => {
    navigate(props.navigation);
  });

  return (
    <View style={styles.container}>
      <Text>Splash Screen</Text>
    </View>
  );
}

async function navigate(navigation) {
  const user = firebase.auth().currentUser;
  console.log(user);
  if (user) {
    if (await AuthService.userInfoAdded()) {
      navigation.navigate('Main');
    } else {
      console.log('Adding info');
      navigateToAddInfo(navigation);
    }
  } else {
    navigation.navigate('Login');
  }
}

function navigateToAddInfo(navigation) {
  const navAction = NavigationActions.navigate({
    routeName: 'Login',
    action: StackActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: 'AddInfo' })],
    }),
  });
  navigation.dispatch(navAction);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SplashScreen;
