import React from 'react';
import store from "../models";
import { useObserver } from "mobx-react";
import Child from './Child';

function App() {
    const { CounterModel } = store;
    return (
        <>
            {useObserver(() => (
                <>
                    <div>---------Widget1---------</div>
                    <div>{CounterModel.count}</div>
                </>
            ))}
            <Child />
        </>
    )
}

export default App;
