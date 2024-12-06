const initialState = {
  movies: [],
};

const fetchMoviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_MOVIES':
      return {
        ...state,
        movies: [...state.movies, ...action.payload],
      }
    default:
      return state
  }
}

export default fetchMoviesReducer;