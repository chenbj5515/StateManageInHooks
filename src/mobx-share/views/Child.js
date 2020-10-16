import React from 'react';
// import store from "../models";
import {reaction} from "mobx";
import { useLocalStore, useObserver } from "mobx-react";

function App() {
    const obj = useLocalStore(() => ({
        count: 0,
        time: 10,
    }));
    reaction(() => obj.count, count => console.log(count * obj.time));
    return (
        <div onClick={() => obj.count++}>click to add count</div>
    )
}

export default App;
