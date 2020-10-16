import React, {useState, useEffect, useCallback} from "react";

const Child = React.memo((props) => {
    console.log('Child Rerender:')
    const [result,setResult] = useState('')
    const { fetchData } = props;
    useEffect(() => {
        fetchData().then(result => {
            setResult(result);
        })
    },[fetchData])
    return (
        <>
            <div>query: {props.query}</div>
            <div>result: {result.slice(100, 180)}</div>
        </>
    )
})

export default function Parent(){
    const [query, setQuery] = useState('react');
    const [other, setOther] = useState('other');
    const fetchData = () => {
        const url = 'https://hn.algolia.com/api/v1/search?query=' + query
        return fetch(url).then(x => x.text())
    }
    useCallback(fetchData, [qyery]);
    return (
        <div>
            <div onClick={() => setOther(other + '1')}>点击更改另一个无关state</div>
            <input onChange={e => setQuery(e.target.value)} value={query} />
            <Child fetchData={fetchData} query={query}/>
        </div>
    )
}