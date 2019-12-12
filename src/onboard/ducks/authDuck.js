import { all, put, call, takeLatest } from 'redux-saga/effects';
import firebase from '@react-native-firebase/app';
import '@react-native-firebase/auth';

const LOGIN = 'auth/fetchUser';
const LOGIN_SUCCESS = 'auth/fetchUserComplete';
const LOGIN_FAILED = 'auth/fetchUserFailed';
const VERIFY_TOKEN = 'auth/verifyToken';
const VERIFY_SUCCESS = 'auth/tokenSuccess';
const VERIFY_FAILED = 'auth/tokenSuccess';
const ADD_INFO = 'auth/addInfo';
const INFO_SUCCESS = 'auth/infoSuccess';
const INFO_FAILED = 'auth/infoFailed';

let confirmationResult;

const initialState = {
  pending: false,
  user: null,
  err: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
    case VERIFY_TOKEN:
      return { ...state, pending: true };
    case LOGIN_SUCCESS:
      return { ...state, pending: false };
    case LOGIN_FAILED:
    case VERIFY_FAILED:
      return { ...state, pending: false, err: action.payload };
    case VERIFY_SUCCESS:
      return { ...state, user: action.payload };
    default:
      return state;
  }
}

export function login(phoneNumber) {
  return { type: LOGIN, phoneNumber };
}

export function confirm(code) {
  return { type: VERIFY_TOKEN, payload: code };
}

function* loginSaga(action) {
  try {
    console.log(action);
    console.log(firebase.auth().signInWithPhoneNumber);
    confirmationResult = yield call(
      [firebase.auth(), 'signInWithPhoneNumber'],
      action.phoneNumber,
    );
    console.log(confirmationResult);
    yield put({ type: LOGIN_SUCCESS });
  } catch (e) {
    console.log(e);
    yield put({ type: LOGIN_FAILED, payload: e });
  }
}

function* verifyTokenSaga(action) {
  try {
    const { user } = yield call(confirmationResult, action.payload);
    yield put({ type: VERIFY_SUCCESS, user });
  } catch (e) {
    yield put({ type: VERIFY_FAILED, err: action.payload });
  }
}

export function* saga() {
  yield all([
    takeLatest(LOGIN, loginSaga),
    takeLatest(VERIFY_TOKEN, verifyTokenSaga)
  ]);
}
