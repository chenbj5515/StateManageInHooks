import React from 'react';
// import Child from './Child';
import { useSelector } from "react-redux";

function App() {
    const count = useSelector(state => state.counter.count);
    return (
        <>
            <div>---------Widget1---------</div>
            <div>{count}</div>
            {/* <Child /> */}
        </>
    );
        
}

export default App;
