import { combineReducers } from 'redux';
import fetchMoviesReducer from './fetchMoviesReducer'
import addMovieToFavorite from './addToFavoriteReducer'

const rootReducer = combineReducers({
    fetchMoviesReducer: fetchMoviesReducer,
    addMovieToFavorite: addMovieToFavorite,

});

export default rootReducer;