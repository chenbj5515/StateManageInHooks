import React, {useState} from 'react';
import Child from './child1';

function App() {
    const [likeCount, setlikeCount] = useState(0);
    const [dislikeCount, setdislikeCount] = useState(0);
    console.log("root1 rerender");
    return (
        <>
            <div>这里是父组件1</div>
            <div>点赞数: {likeCount}</div><div>点踩数: {dislikeCount}</div>
            <Child setlikeCount={setlikeCount} setdislikeCount={setdislikeCount}/>
        </>
        
    );
}

export default App;
