import { useObserver } from 'mobx-react';
import React from 'react';
import store from "../models";
import Child from './Child';

function App() {
    const { CounterModel } = store;
    console.log('widget2 rerender');
    return useObserver(() => (
        <>
            <div>---------Widget2---------</div>
            <div onClick={() => CounterModel.count++}>click to add count（用来修改其他组件的UI）</div>
            <div onClick={() => console.log(CounterModel.count)}>click to log count（组件2中没有监听，看看点击上面按钮修改count后这里是否可以获取最新的count）</div>
            <Child count={CounterModel.count}/>
        </>
        )
    );
}

export default App;
