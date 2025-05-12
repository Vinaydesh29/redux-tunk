import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "./Slice";

function App() {
  const { user, status, error } = useSelector((state) => state.ApiTunk);
  const dispatch = useDispatch();
  useEffect(() => {
    if (status === "") {
      dispatch(fetchData());
    }
  }, [status, dispatch]);
  return (
    <>
      {status === "Loading" ? (
        <p>loading</p>
      ) : (
        <ul>
          {user.map((items, index) => {
            return <li key={index}>{items.name}</li>;
          })}
        </ul>
      )}
      {error && <h1>{error}</h1>}
    </>
  );
}
export default App;
