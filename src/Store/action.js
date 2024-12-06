export const fetchMovies = (movies) => {
  return {
    type: 'FETCH_MOVIES',
    payload: movies
  }
}

export const addMovieToFavorite = (movie) => {
  return {
    type: 'ADD_MOVIE_TO_FAVORITE',
    payload: movie,
  }
}