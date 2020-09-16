import React from "react";
import { Counter } from "./AppModel";
import C from "./C";
import D from "./D";

function App() {
  return (
    <Counter.Provider>
      <C />
      <D />
    </Counter.Provider>
  );
}

export default App;
