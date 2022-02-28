import React from "react";
import { useSelector, useDispatch } from "react-redux"
import { increment, decrement, reset } from "../../store/slice/counter";
const Counter = () => {
  const count = useSelector(state => state.counterSlice.value);
  console.log(count)
  const dispatch = useDispatch();


  return (
    <>
      <div className="counterstore">{count}</div>
      <div className="counterincrement">
        <button onClick={() => dispatch(increment())}>INCREMENT BY 1</button>
      </div>
      <div className="counterdecrement">
        <button onClick={() => dispatch(decrement())}>DECREMENT BY 1</button>
      </div>
      <button onClick={() => dispatch(reset())} >RESET</button>
    </>
  );
};



export default Counter;
