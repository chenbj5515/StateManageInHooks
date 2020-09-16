import React, { createContext, useState } from "react";
import C from "./C";
import D from "./D";
import E from "./E";

export const Context = createContext();
export default function App() {
  console.log("Root render");
  const [count, setCount] = useState(0);
  const name = "chenbj";
  return (
    <Context.Provider value={{ count, setCount, name }}>
      <C />
      <D />
      <E />
    </Context.Provider>
  );
}
