import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
} from "../Redux/Features/Counters/CounterSlice.js";

const Counter = () => {
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  // console.log(count);

  return (
    <>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <h1>{count}</h1>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </>
  );
};

export default Counter;
