import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  incrementByValue,
} from "../Redux/Features/Counters/CounterSlice.js";

const Counter = () => {
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  // console.log(count);

  return (
    <>
      <div className="grid mx-auto grid-cols-1 space-y-3 md:space-y-0 md:grid-cols-3 lg:grid-cols-4 gap-5 items-center">
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
        <div className="flex justify-center">
          <h1 className="text-black font-bold text-2xl">{count}</h1>
        </div>
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
