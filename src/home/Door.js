import React from 'react';
import { Text, View } from 'react-native';

class DoorScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Door {this.props.doorId}</Text>
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
