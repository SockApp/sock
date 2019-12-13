const DOOR_FETCH_COMPLETE = 'home/firestore/doorFetch';
const USER_FETCH_COMPLETE = 'home/firestore/userFetch';

const initialState = {
  doors: null,
  user: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case DOOR_FETCH_COMPLETE:
      return reduceDoors(state, action);
    case USER_FETCH_COMPLETE:
      return { ...state, user: action.user };
    default:
      return state;
  }
}

function reduceDoors(state, action) {
  const newState = { ...state };
  Object.entries(action.doors).forEach(([id, door]) => {
    newState.doors[id] = door;
  });
  return newState;
}

export function updateUser(userDoc) {
  return { type: USER_FETCH_COMPLETE, user: formatDoc(userDoc) };
}

export function updateDoors(doorSnapshot) {
  return { type: USER_FETCH_COMPLETE, doors: formatSnapshot(doorSnapshot) };
}

function formatDoc(doc) {
  return { id: doc.id, ...doc.data() };
}

function formatSnapshot(snapshot) {
  const result = {};
  snapshot.forEach(doc => {
    result[doc.id] = formatDoc(doc);
  });
  return result;
}
