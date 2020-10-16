export default (state, action) => {
    switch(action.type) {
        case 'FETCH_START':
            return { ...state, 'status': 'LOADING_STATE' }
        case 'FETCH_SUCCESS':
            return { ...state, 'status': 'SUCCESS_STATE', newsTitleList: action.news.data.map(news => news.title) }
        case 'FETCH_FAILURE':
            return { ...state, 'status': 'FAILURE_STATE' }
        default:
            return { ...state }
    }
}