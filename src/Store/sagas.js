import { call, put, takeLatest, all } from 'redux-saga/effects'
import { fetchMoviesApi } from '../Services/MovieService'
import { fetchMoviesFailure, fetchMoviesSuccess } from './actions'

function* fetchMoviesSaga(action) {
    try {
        const movies = yield call(fetchMoviesApi, action.payload)
        yield put(fetchMoviesSuccess(movies))
    } catch (error) {
        yield put(fetchMoviesFailure(error.message))
    }
}

function* rootSaga() {
    yield all([
        takeLatest('FETCH_MOVIES_REQUEST', fetchMoviesSaga)
    ])
}

export default rootSaga;