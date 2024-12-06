const initialState = {
    movies: [],
  };
  
  const moviesReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_MOVIE_TO_FAVORITE':
        return {
          ...state,
          movies: [...state.movies, action.payload], // Fix this line
        };
      default:
        return state;
    }
  };
  
  export default moviesReducer;
  