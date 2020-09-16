import React, {useState} from "react";
export default function () {
    console.log('D render')
    const [count, setCount] = useState(0);
    return (
        <>
        <div>----------Here is D------------</div>
        <div onClick={() => setCount((count) => count + 1)}>
            click to add count in D
        </div>
        </>
    );
}
