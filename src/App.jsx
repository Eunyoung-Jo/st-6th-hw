import React from "react";
import useFetch from "./hooks/useFetch";

const App = () => {
  const { data, loading, error } = useFetch("https://jsonplaceholder.typicode.com/todos/1");

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Error: {error.message}</h1>;

  return (
    <div>
      <h1>Data Fetching Example</h1>
      <p>{data?.title}</p>
    </div>
  );
};

export default App;
