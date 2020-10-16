import React from 'react'
import './newsItem.css'
// import {useDispatch} from 'react-redux'
// import actionCreator from '../actionCreator'

const NewsItem = ({title}) => {
    return <div className='news-item'>
        <p>{ title }</p>
        {/* <button onClick={ () => dispatch() }>X</button> */}
    </div>
}

export default NewsItem