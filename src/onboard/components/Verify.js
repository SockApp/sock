import React from 'react';
import { View, Text, Button } from 'react-native';
let VerifyScreen = props => {
  return (
    <View>
      <Text>Hello, enter your phone next</Text>
      <Button
        title="move on"
        onPress={() => props.navigation.navigate('Info')}
      />
    </View>
  );
};

export default VerifyScreen;
