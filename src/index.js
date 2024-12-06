import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Layout from './Components/Layout/Layout';
import { all } from 'redux-saga/effects';
import exampleSaga from './Sagas/exampleSaga';
import { Provider } from 'react-redux';
import store from './Store/store';


export default function* rootSaga() {
  yield all([exampleSaga()]);
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Layout />
    </Provider>
  </React.StrictMode>
);