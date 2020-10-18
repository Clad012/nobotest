import { call, put, takeLatest } from 'redux-saga/effects'

const apiUrl = `https://jsonplaceholder.typicode.com`;
function getApi(end_point, data = '') {
  return fetch(`${apiUrl}/api/${end_point}?${data}`, {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json',

      }
  }).then(response => response.json())
    .catch((error) => {throw error})
}

function* fetchHistory(action) {
   try {
      const programmes = yield call(getApi, 'programmes');
      yield put({type: 'GET_PROGRAMS_SUCCESS', programmes: programmes});
   } catch (e) {
      yield put({type: 'GET_PROGRAMS_FAILED', message: e.message});
   }
}
function* handleProgram1(action) {
   try {
      const result = yield call(getApi, 'programme1', action.payload);
      yield put({type: 'PROGRAM1_SUCCESS', result: result});
   } catch (e) {
      yield put({type: 'PROGRAM2_FAILED', message: e.message});
   }
}

function* handleProgram2(action) {
   try {
      const result = yield call(getApi, 'programme2', action.payload);
      yield put({type: 'PROGRAM2_SUCCESS', result: result});
   } catch (e) {
      yield put({type: 'PROGRAM2_FAILED', message: e.message});
   }
}


export function* watchHistory() {
   yield takeLatest('GET_PROGRAMS_REQUESTED', fetchHistory);
}
export function* watchPogram1() {
  yield takeLatest('PROGRAM1_REQUESTED', handleProgram1)
}
export function* watchPogram2() {
  yield takeLatest('PROGRAM2_REQUESTED', handleProgram2)
}

// // `fork()` to multiple watchers.
// function* programSaga() {
//   yield all([fork(watchHistory), fork(watchPogram1), fork(watchPogram2)])
// }

