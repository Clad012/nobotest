import { all, fork } from 'redux-saga/effects'
import {watchHistory, watchPogram1, watchPogram2 } from './programmeSaga'

// export default programSaga;
export default function* rootSaga() {
    yield all([fork(watchHistory), fork(watchPogram1), fork(watchPogram2)])
}