import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMoviesRequest } from "../../Store/actions";

const Layout = () => {
  const dispatch = useDispatch();

  const { movies, loading, error } = useSelector((state) => state.fetchMovies);

  useEffect(() => {
    dispatch(fetchMoviesRequest("popular"));
  }, [dispatch]);

  return (
    <div>
      <h1>Movies</h1>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Layout;
