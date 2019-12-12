import firebase from '@react-native-firebase/app';
import '@react-native-firebase/auth';
import { parsePhoneNumber } from 'libphonenumber-js';

let user;
let confirmationResult;

export async function login(phoneNumber) {
  const formattedPhoneNumber = parsePhoneNumber(phoneNumber, 'US');
  const auth = firebase.auth();

  try {
    confirmationResult = await auth.signInWithPhoneNumber
      .bind(auth)(formattedPhoneNumber.number);
  } catch (e) {
    throw e;
  }
}

export async function verify(code) {
  if (!confirmationResult) {
    throw new Error('Verification workflow not initiated');
  }

  try {
    user = await confirmationResult.confirm(code);
    return user;
  } catch (e) {
    throw e;
  }
}

export default {
  login,
  verify,
};
