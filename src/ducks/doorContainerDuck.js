import { put, call, takeLatest } from 'redux-saga/effects';
import firestore from '@react-native-firebase/firestore';
import firebaseAuth from '@react-native-firebase/auth';
const FETCH_DOORS = 'doorContainer/fetchUser';
const DOOR_FETCH_COMPLETE = 'doorContainer/fetchUserComplete';
const DOOR_FETCH_FAILED = 'doorContainer/fetchUserFailed';

const initialState = {
  pending: false,
  doors: null,
  err: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_DOORS:
      return { ...state, pending: true };
    case DOOR_FETCH_COMPLETE:
      return { ...state, pending: false, doors: action.payload };
    case DOOR_FETCH_FAILED:
      return { ...state, pending: false, err: action.payload };
    default:
      return state;
  }
}

export function fetchDoors() {
  return { type: FETCH_DOORS };
}

function* fetchUserSaga(action) {
  console.log(firebaseAuth.currentUser);
  try {
    const snapshot = yield call(
      firestore
        .collection('Doors')
        .where('userId', '==', firebaseAuth.currentUser.uid).get,
    );
    yield put({
      type: DOOR_FETCH_COMPLETE,
      payload: snapshot.docs.map(formatDoc),
    });
  } catch (e) {
    yield put({ type: DOOR_FETCH_FAILED, payload: e });
  }
}

export function* saga() {
  yield takeLatest(FETCH_DOORS, fetchUserSaga);
}

function formatDoc(d) {
  return Object.assign(d.data(), { id: d.id });
}
