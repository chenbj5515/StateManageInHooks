import React, { useContext } from "react";
import { Context } from "./App";

export default function C() {
  const { count } = useContext(Context);
  return (
    <>
      <div>----------Here is C------------</div>
      <div>{count}</div>
    </>
  );
}
