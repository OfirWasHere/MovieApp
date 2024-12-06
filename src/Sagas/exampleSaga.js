import { call, put, takeLatest } from 'redux-saga/effects';

// Simulate an API call
const fetchData = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!response.ok) throw new Error('Error fetching data');
  return await response.json();
};

// Worker saga: handles the action and performs the API call
function* handleFetchData() {
  try {
    const data = yield call(fetchData);
    yield put({ type: 'FETCH_DATA_SUCCESS', payload: data });
  } catch (error) {
    yield put({ type: 'FETCH_DATA_FAILURE', error: error.message });
  }
}

// Watcher saga: watches for FETCH_DATA_REQUEST action
export default function* exampleSaga() {
  yield takeLatest('FETCH_DATA_REQUEST', handleFetchData);
}
