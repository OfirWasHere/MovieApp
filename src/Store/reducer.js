import { combineReducers } from "redux"
import actionTypes from "../types/types";

const initialMoviesState = {
  movies: [],
  loading: false,
  error: null,
};

const moviesReducer = (state = initialMoviesState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_MOVIES_SUCCESS:
      return {
        ...state,
        movies: [...state.movies, ...action.payload],
      };
    case actionTypes.FETCH_MOVIES_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  fetchMovies: moviesReducer,

});

export default rootReducer;
