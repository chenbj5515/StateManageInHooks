import React from 'react'
import NewsItem from './newsItem'
import { useSelector } from "react-redux";

const NewsList = () => {
    const {newsTitleList, status} = useSelector(state => state);
    if(status === 'INITIAL_STATE') {
        return <div>no news data...</div>
    }else if(status === 'LOADING_STATE') {
        return <div>loading...</div>
    }else if(status === 'SUCCESS_STATE') {
        return newsTitleList.map((newsTitle, index)=> {
            return newsTitle !== null &&  <NewsItem key={ newsTitle } title={ newsTitle } titleIndex={index}/>
        })
    }else {
        return <div>something wrong on the page!!!</div>
    }   
}

export default NewsList;