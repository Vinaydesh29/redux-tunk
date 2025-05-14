import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "./Slice";
import Promise from "./Promise";
import PromiseData from "./PromiseData";

function App() {
  // const { status, error, user } = useSelector((state) => state.ApiStore);
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   if (status === "") {
  //     dispatch(fetchData());
  //   }
  // }, [dispatch, status]);
  return (
    <>
      {/* {status === "loading" && <p>{status}</p>}
      {status === "failed" && <p>{error}</p>}
      {status === "success" && (
        <ul>
          {user.map((items, index) => {
            return <li key={index}>{items.title}</li>;
          })}
        </ul>
      )} */}
      <PromiseData />
    </>
  );
}
export default App;
