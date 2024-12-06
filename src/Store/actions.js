import actionTypes from "../types/types"


export const fetchMoviesRequest = (filter) => ({
  type: actionTypes.FETCH_MOVIES_REQUEST,
  payload: filter,
})

export const fetchMoviesSuccess = (movies) => ({
  type: actionTypes.FETCH_MOVIES_SUCCESS,
  payload: movies,
})

export const fetchMoviesFailure = (error) => ({
  type: actionTypes.FETCH_MOVIES_FAILURE,
  payload: error,
})
