import React from 'react';
import { useDispatch } from "react-redux";
import * as counterAction from "../models/counter/action.js";

function App() {
    const dispatch = useDispatch();
    const increase = () => dispatch(counterAction.increase(1));
    const decrease = () => dispatch(counterAction.decrease(1));
    return (
        <>
            <div>---------Widget2---------</div>
            <div onClick={increase}>Increase</div>
            <div onClick={decrease}>Decrease</div>
        </>
        
    );
}

export default App;
