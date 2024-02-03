import React, { useReducer, useState } from "react";
import { incrementLike, decrementLike } from "./Actions";
import { createStore } from "redux";
import Reducer from "./Reducer";

const reduce = createStore(Reducer);

export default function LikeCounter() {
  const [count, setCount] = useState(0);

  const store = reduce.subscribe(() => {
      console.log(reduce.getState());
      setCount(reduce.getState().count)
  })

  return (
    <>
      <h2>{count}</h2>
      <button
        onClick={() => {
          reduce.dispatch(incrementLike());
        //   console.log(reduce.getState());
        }}
      >
        Like
      </button>
      <button
        onClick={() => {
          reduce.dispatch(decrementLike());
        //   console.log(reduce.getState());
        }}
      >
        Unlike
      </button>
    </>
  );
}
