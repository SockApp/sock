import React from 'react';
import { Text, View, Button } from 'react-native';
import firebase from '@react-native-firebase/app';
import '@react-native-firebase/auth';

class DoorScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Door {this.props.doorId}</Text>
        <Button title="Sign out" onPress={() => firebase.auth().signOut()} />
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
};

export default DoorScreen;
