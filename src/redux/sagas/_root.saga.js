import { all } from 'redux-saga/effects';
import elementSaga from './element.saga.js';

// Our rootSaga bungles all other sagas together

export default function* rootSaga() {
    yield all([
        elementSaga(),
        // Other sagas would go here!
    ]);
}