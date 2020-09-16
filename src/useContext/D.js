import React, { useContext } from "react";
import { Context } from "./App";
export default function () {
  const { setCount } = useContext(Context);
  return (
    <>
      <div>----------Here is D------------</div>
      <div onClick={() => setCount((count) => count + 1)}>
        click to add count in C
      </div>
    </>
  );
}
