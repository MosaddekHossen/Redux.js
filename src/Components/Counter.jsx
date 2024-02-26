import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  incrementByValue,
} from "../Redux/Features/Counters/CounterSlice.js";

const Counter = () => {
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  console.log(count);

  return (
    <>
      <div className="flex justify-evenly items-center">
        <button
          className="px-5 py-3 bg-sky-600 text-white text-2xl font-bold rounded-lg"
          onClick={() => dispatch(incrementByValue(5))}
        >
          Increment by 5
        </button>
        <button
          className="px-5 py-3 bg-sky-600 text-white text-2xl font-bold rounded-lg"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <h1 className="text-black font-bold text-2xl">{count}</h1>
        <button
          className="px-5 py-3 bg-sky-600 text-white text-2xl font-bold rounded-lg"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </>
  );
};

export default Counter;
