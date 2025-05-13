import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FetchData } from "./Slice";
import Counter from "./Counter";
import Count from "./Count";

function App() {
  const { status, user, error } = useSelector((status) => status.ApiStore);
  const dispatch = useDispatch();
  useEffect(() => {
    if (status === "") {
      dispatch(FetchData());
    }
  }, [dispatch, status]);

  return (
    <>
      {/* {status === "Loading" && <h2>Loading</h2>}
      {status === "failed" && <h2>{error}</h2>}
      {status === "success" && (
        <ul>
          {user.map((items, index) => {
            return <li key={index}>{items.title}</li>;
          })}
        </ul>
      )} */}
      <Counter />
      <Count />
    </>
  );
}
export default App;
