import React from 'react';

function App() {
    console.log('child rerender');
    return (
        <div>组件1的静态子组件，我用来验证是更新整个子树还是绑定了count的这个DOM元素</div>
    )
}

export default App;
