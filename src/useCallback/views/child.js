import React, {useState, useEffect} from 'react';
import {fetchData} from './widget2';

const Child = React.memo((props) => {
    console.log('Child Rerender:')
    const [result, setResult] = useState('')
    useEffect(() => {
        fetchData(props.query).then(result => {
            setResult(result);
        })
    },[props.query])
    return (
        <>
            <div>query: {props.query}</div>
            <div>result: {result.slice(100, 180)}</div>
        </>
    )
})

export default Child;
