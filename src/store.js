import createSagaMiddleware from 'redux-saga';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { all, fork } from 'redux-saga/effects';
import {
  reducer as onBoardReducer,
  saga as onBoardSaga,
} from './onboard/store';

const rootReducer = combineReducers({
  onboard: onBoardReducer,
});

function* rootSaga() {
  yield all([fork(onBoardSaga)]);
}

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

export default store;
