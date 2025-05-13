import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { incre } from "./CountSlice";

function Count() {
  const [num, setNum] = useState();
  const value = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <>
      <p>Count : {value}</p>
      <input type="number" onChange={(e) => setNum(parseInt(e.target.value))} />
      <button onClick={() => dispatch(incre(num))}>Incre By {num}</button>
    </>
  );
}
export default Count;
