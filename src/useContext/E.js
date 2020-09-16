import React, { useContext } from "react";
import { Context } from "./App";

export default function () {
  const { name } = useContext(Context);
  console.log("E render");
  return (
    <>
      <div>----------Here is E------------</div>
      <div>{name}</div>
    </>
  );
}
