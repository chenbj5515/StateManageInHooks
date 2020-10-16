import React from "react";
import store from "../models";
import { reaction, autorun } from "mobx";
import { observer, useObserver, Observer } from "mobx-react";
import Child from './Child';

function App() {
    const { CounterModel, NameModel } = store;
    // console.log(NameModel.age);
    // useObserver(() => console.log(CounterModel.count))
    // reaction(() => CounterModel.count, count => console.log(count))
    autorun(() => {console.log(CounterModel.count);})
    console.log('widget1 rerender');
    return (
        <>
            <div>---------Widget1---------</div>
            {/* <Observer>{() => <div>{CounterModel.count}</div>}</Observer> */}
            <div onClick={() => {console.log(CounterModel.count);}}>click to log count</div>
            <Child />
        </>
    )
}

export default (App);
