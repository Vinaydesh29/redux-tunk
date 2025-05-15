import { useDispatch, useSelector } from "react-redux";
import { decBy1, inceBy1, inceBy5, reset } from "./CountSlice";

function Counter2() {
  const value = useSelector((state) => state.count.value);
  const dispatch = useDispatch();
  return (
    <>
      <p>Count : {value}</p>
      <button onClick={() => dispatch(inceBy1())}>increBy1</button>
      <button onClick={() => dispatch(inceBy5())}>InceBy5</button>
      <button onClick={() => dispatch(decBy1())}>decBy1</button>
      <button onClick={() => dispatch(reset())}>reset</button>
    </>
  );
}
export default Counter2;
