import React from "react";
import { Counter } from "./AppModel";

function C() {
  let counter = Counter.useContainer();
  return (
    <>
      <div>{counter.count}</div>
    </>
  );
}

export default C;
