import React from "react";
import { fetchMovies } from "../../Store/action";
import { useDispatch, useSelector } from "react-redux";

function Layout() {
  const dispatch = useDispatch();
  const fetchedMovies = useSelector((state) => state.fetchMoviesReducer.movies); // Fix the selector

  return (
    <div>
      <button onClick={() => dispatch(fetchMovies(["Movie 1", "Movie 2"]))}>
        test
      </button>
      <ul>
        {fetchedMovies.map((movie, index) => (
          <li key={index}>{movie}</li>
        ))}
      </ul>
    </div>
  );
}

export default Layout;
