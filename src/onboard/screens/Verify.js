import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { StyleSheet, Text, Button, View, TextInput } from 'react-native';
import { verify } from '../ducks/authDuck';

const LoginScreen = () => {
  const [code, setCode] = useState('');
  const dispatch = useDispatch();

  return (
    <View>
      <Text>Hello, enter the verification code</Text>
      <TextInput style={styles.input} onChangeText={setCode} value={code} />
      <Button title="move on" onPress={() => dispatch(verify(code))} />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: '100%',
    backgroundColor: 'red',
  },
});

export default LoginScreen;
