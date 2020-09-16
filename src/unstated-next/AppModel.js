import { useState } from "react";
import { createContainer } from "unstated-next";
function useCounter(initialState = 0) {
  let [count, setCount] = useState(initialState);
  return { count, setCount };
}

export let Counter = createContainer(useCounter);
