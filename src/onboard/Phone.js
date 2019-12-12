import React, { useEffect } from 'react';
import { Text, Button } from 'react-native';
let LoginScreen = props => {
  useEffect(() => {
    console.log(props);
  });

  return (
    <>
      <Text>Hello, enter your phone number</Text>
      <Button title="move on" onClick={props.navigation.navigate('Verify')} />
    </>
  );
};

export default LoginScreen;
