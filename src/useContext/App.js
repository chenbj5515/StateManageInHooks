import React, { createContext, useState } from "react";
import C from "./C";
import D from "./D";
import E from "./E";

export const Context = createContext();
export const manager = {}

export default function App() {
  console.log("Root render");
  const [count, setCount] = useState(0);
  const name = "chenbj";
  manager.setCount = setCount;
  return (
    <Context.Provider value={{ count, setCount, name }}>
      <C />
      <D />
      <E />
    </Context.Provider>
  );
}
