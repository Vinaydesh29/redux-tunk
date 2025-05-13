import { useDispatch, useSelector } from "react-redux";
import { decBy1, increBy1, increBy5 } from "./CountSlice";

function Counter() {
  const value = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <>
      <h2>Count : {value}</h2>
      <button onClick={() => dispatch(increBy1())}>InceBy 1</button>
      <button onClick={() => dispatch(decBy1())}>deceBy 1</button>
      <button onClick={() => dispatch(increBy5())}>InceBy 5</button>
    </>
  );
}
export default Counter;
