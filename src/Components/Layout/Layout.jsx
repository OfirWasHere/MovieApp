import React from "react";
import { useDispatch, useSelector } from "react-redux";

function Layout() {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.example);

  const fetchData = () => {
    dispatch({ type: "FETCH_DATA_REQUEST" });
  };

  return (
    <div>
      <h1>Redux-Saga Example</h1>
      <button onClick={fetchData} disabled={loading}>
        {loading ? "Loading..." : "Fetch Data"}
      </button>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default Layout;
