import React from 'react';

function App({dispatch}) {
    console.log("child2 rerender");
    return (
        <>
            我是子组件2
            <div onClick={() => dispatch({type: 'LIKE'})}>点赞</div>
            <div onClick={() => dispatch({type: 'DISLIKE'})}>点踩</div>
        </>
    )
}

export default React.memo(App);
