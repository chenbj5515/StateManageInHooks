import React, {useState} from "react";
import Child from './child'

// 这种函数可以直接导出，避免使用callback
export function fetchData(query) {
    const url = 'https://hn.algolia.com/api/v1/search?query=' + query
    return fetch(url).then(x => x.text())
}
export default function Parent(){
    const [query, setQuery] = useState('react');
    const [other, setOther] = useState('other');
    return (
        <div>
            <div onClick={() => setOther(other + '1')}>点击更改另一个无关state</div>
            <input onChange={e => setQuery(e.target.value)} value={query} />
            <Child query={query}/>
        </div>
    )
}
   