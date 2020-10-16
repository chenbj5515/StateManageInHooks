import React, {useReducer, useState} from 'react';
import Child from './child2';

function reducer(state, action) {
    switch(action.type) {
        case 'LIKE':
            return {
                ...state,
                likeCount: state.likeCount + 1
            }
        case 'DISLIKE':
            return {
                ...state,
                dislikeCount: state.dislikeCount + 1
            }
        default:
            return state
    }
}

function App() {
    const [counter, dispatch] = useReducer(reducer, {
        likeCount: 0,
        dislikeCount: 0
    });
    const [state, setstate] = useState(0);
    console.log("root2 rerender");
    return (
        <>
            <div>这里是父组件2</div>
            <div>点赞数: {counter.likeCount}</div><div>点踩数: {counter.dislikeCount}</div>
            <div onClick={() => setstate(state + 1)}>click to set other state to trigger rerender</div>
            <Child counter={counter} dispatch={dispatch}/>
        </>
        
    );
}

export default App;
