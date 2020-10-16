import React from 'react'
import NewsList from './views/newsList'
import {useDispatch} from 'react-redux'
import actionCreator from './actionCreator'

const App = () => {
    const dispatch = useDispatch();
    return (<div>
        <button onClick={ () => dispatch(actionCreator.fetchNewsTitle()) } >Fetch Data</button>
        <NewsList />
    </div>)
} 

export default App;