import { lazy, Suspense, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "./Slice";
import Promise from "./Promise";
import PromiseData from "./PromiseData";
import Counter from "./Counter";

function App() {
  // const { status, error, user } = useSelector((state) => state.ApiStore);
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   if (status === "") {
  //     dispatch(fetchData());
  //   }
  // }, [dispatch, status]);
  const LazyLoad = lazy(() => import("./Counter"));
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
      <h1>this home page</h1>
      <Suspense fallback={<div>loading</div>}>
        <LazyLoad />
      </Suspense>
    </>
  );
}
export default App;
