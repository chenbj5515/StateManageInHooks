import React from 'react';
import ReactDOM from 'react-dom';
import {autorun, observable} from './mobx-core';

function App() {
    let obj = observable({
        name: 'chenbj',
        counter: 23
    })
    let flag = false;
    // autorun(() => {console.log(`age改变了，当前值为${obj.counter}`);})
    autorun(() => {
        if (flag) {
            console.log(`age改变了，当前值为${obj.counter}`)
        }
    })
    return (
        <>
            {/* <div onClick={() => obj.counter++}>click to change counter</div> */}
            <div onClick={() => obj = {}}>click to assign counter</div>
            <div onClick={() => {
                flag = true
                obj.count++
            }}>click to add counter</div>
        </>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
