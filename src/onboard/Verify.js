import React, { useEffect } from 'react';
import { Text, Button } from 'react-native';
let VerifyScreen = props => {
  useEffect(() => {});

  return (
    <>
      <Text>Hello, enter your phone nextttttfsdafsdf</Text>
      <Button title="move on" onClick={props.navigation.navigate('Info')} />
    </>
  );
};

export default VerifyScreen;
