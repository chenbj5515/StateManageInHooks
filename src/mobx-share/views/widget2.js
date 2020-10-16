import React from 'react';
import store from "../models";

function App() {
    const { CounterModel, NameModel } = store;
    return (
        <>
            <div>---------Widget2---------</div>
            <div onClick={() => CounterModel.count++}>click to add count（用来修改其他组件的UI）</div>
            <div onClick={() => NameModel.age++}>click to add age（用来修改其他组件的UI）</div>
            <div onClick={() => console.log(CounterModel.count)}>click to log count（组件2中没有监听，看看点击上面按钮修改count后这里是否可以获取最新的count）</div>
        </>
        
    );
}

export default App;
