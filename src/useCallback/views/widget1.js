import React, {useState, useEffect} from "react";

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
    return (
        <div>
            <div onClick={() => setOther(other + '1')}>点击更改另一个无关state</div>
            <input onChange={e => setQuery(e.target.value)} value={query} />
            {/* 如果直接这样传callback，那么点击上面的更改无关state按钮的时候，子组件useEffect中的代码仍会执行 */}
            {/* 这是因为点击按钮，Parent重新执行，又生成了一个新的fetchData函数，与上次渲染的作用域的fetchData是不同的 */}
            {/* React.memo的作用是props相同子组件就不重新渲染，而现在fetchData不同了，memo失效，重新渲染 */}
            {/* 子组件这边重新渲染，这次的fetchData和上次不同，所以useEffect触发，再次请求 */}
            {/* 再次请求由于query没变，理论上没什么大问题，但是终究是多余的副作用，是一种隐患。比如在fetchData做上报搞全链路监控怎么办？你这多了一个不改存在的链路不是坑人么？ */}
            {/* 使用useCallback可以解决这个问题，见Widget2 */}
            <Child fetchData={fetchData} query={query}/>
        </div>
    )
}
   