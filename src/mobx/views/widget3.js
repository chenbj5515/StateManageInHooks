import React from 'react';
import store from "../models";
import { useObserver } from "mobx-react";

function App() {
    console.log('widget3 rerender');
    const { NameModel } = store;
    return useObserver(() => (
        <>
            <div>Widget3</div>
            <div>{NameModel.age}</div>
        </>
        
    ));
}

export default App;
