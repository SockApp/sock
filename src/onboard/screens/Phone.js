import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { StyleSheet, Text, Button, View, TextInput } from 'react-native';
import { login } from '../ducks/authDuck';

const LoginScreen = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const dispatch = useDispatch();

  return (
    <View>
      <Text>Hello, enter your phone number</Text>
      <TextInput
        style={styles.input}
        onChangeText={setPhoneNumber}
        value={phoneNumber}
      />
      <Button title="move on" onPress={() => dispatch(login(phoneNumber))} />
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
