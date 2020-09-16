import React from "react";
import { Counter } from "./AppModel";

function D() {
  let counter = Counter.useContainer();
  return (
    <>
      <div onClick={() => counter.setCount((count) => count + 1)}>
        click to add Count
      </div>
    </>
  );
}

export default D;
