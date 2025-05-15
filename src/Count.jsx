import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { update } from "./CountSlice";

function Count() {
  const [data, setData] = useState();
  const value = useSelector((state) => state.count.value);
  const dispatch = useDispatch();
  return (
    <>
      <input type="text" onChange={(e) => setData(parseInt(e.target.value))} />
      <button onClick={() => dispatch(update(data))}>Ince By {data}</button>
    </>
  );
}
export default Count;
