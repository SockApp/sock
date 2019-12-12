import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Navigation } from 'react-native-navigation';

const bottomTabs = {
  children: [
    {
      component: {
        name: 'DoorScreen',
        options: {
          bottomTab: {
            text: 'Tab 1',
            fontSize: 12,
            icon: require('../../assets/jerry.jpg'),
          },
        },
      },
    },
    {
      component: {
        name: 'DoorScreen',
        options: {
          bottomTab: {
            text: 'Tab 2',
            fontSize: 12,
            icon: require('../../assets/jerry.jpg'),
          },
        },
      },
    },
  ],
  options: {},
};

class SplashScreen extends React.Component {
  componentDidMount() {
    Navigation.setRoot({
      root: { bottomTabs },
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
    alignItems: 'center'
  },
});

export default SplashScreen;
