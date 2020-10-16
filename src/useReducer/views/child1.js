import React from 'react';

function App({setlikeCount, setdislikeCount}) {
  console.log("child1 rerender");
  return (
    <>
        我是子组件1
        <div onClick={() => setlikeCount(count => count + 1)}>点赞</div>
        <div onClick={() => setdislikeCount(count => count + 1)}>点踩</div>
    </>
  )
}

export default React.memo(App);
