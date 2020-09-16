import React from 'react';
import store from "../models";

function App() {
    const { CounterModel } = store;
    return (
        <>
            <div>Widget2</div>
            <div onClick={() => CounterModel.increment()}>click to add count</div>
        </>
        
    );
}

export default App;
