import { all, put, call, takeLatest } from 'redux-saga/effects';
import { NavigationService, AuthService } from '../../services';

const LOGIN = 'auth/fetchUser';
const LOGIN_SUCCESS = 'auth/fetchUserComplete';
const LOGIN_FAILED = 'auth/fetchUserFailed';
const VERIFY_TOKEN = 'auth/verifyToken';
const VERIFY_SUCCESS = 'auth/tokenSuccess';
const VERIFY_FAILED = 'auth/tokenFailed';
const ADD_INFO = 'auth/addInfo';
const INFO_SUCCESS = 'auth/infoSuccess';
const INFO_FAILED = 'auth/infoFailed';

const initialState = {
  pending: false,
  err: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
    case VERIFY_TOKEN:
      return { ...state, pending: true };
    case VERIFY_SUCCESS:
    case LOGIN_SUCCESS:
      return { ...state, pending: false };
    case LOGIN_FAILED:
    case VERIFY_FAILED:
      return { ...state, pending: false, err: action.err };
    default:
      return state;
  }
}

export function login(phoneNumber) {
  return { type: LOGIN, phoneNumber };
}

export function verify(code) {
  return { type: VERIFY_TOKEN, code };
}

function* loginSaga(action) {
  try {
    yield call(AuthService.login, action.phoneNumber);
    // TODO: Error handling
    yield put({ type: LOGIN_SUCCESS });
    NavigationService.navigate('Verify');
  } catch (err) {
    yield put({ type: LOGIN_FAILED, err });
  }
}

function* verifyTokenSaga(action) {
  try {
    yield call(AuthService.verify, action.code);
    yield put({ type: VERIFY_SUCCESS });
  } catch (e) {
    console.log(e);
    yield put({ type: VERIFY_FAILED, payload: e });
  }
}

export function* saga() {
  yield all([
    takeLatest(LOGIN, loginSaga),
    takeLatest(VERIFY_TOKEN, verifyTokenSaga)
  ]);
}
