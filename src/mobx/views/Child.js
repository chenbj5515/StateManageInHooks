import React from 'react';
import { useLocalStore, useObserver } from "mobx-react";

function App(props) {
    let count = 0;
    let localState = useLocalStore((source) => ({
        count: 0,
        getComputed() {
            return source.count * 2;
        }
    }), props)
    // let arr = useLocalStore(() => ({
    //     getComputed() {
    //         return props.count * 2;
    //     }
    // }))
    // console.log(localState.count)
    useObserver(() => {
        if (count === 1) {
            console.log(localState.count)
        }
    })
    return useObserver (() => (
        <>
            <div>{}</div>
            {/* <div onClick={() => {console.log(localState.getComputed())}}>click to push to arr</div> */}
            <div onClick={() => {localState.count++}}>click to add localState count</div>
            <div onClick={() => {console.log(count++);}}>click to add count</div>
        </>
    ))
}

export default App;
