import axios from '../axios'

export default {
    fetchNewsTitle: () => {
        return async (dispatch, getState) => {
            dispatch({
                type: 'FETCH_START',
            })
            try {
                const response = await axios.get('https://hn.algolia.com/api/v1/search?query=')
                if(response.status === 200) {
                    dispatch({
                        type: 'FETCH_SUCCESS',
                        news: response.data,
                    })
                }else {
                    throw new Error('fetch failure')
                }
            } catch(e) {
                dispatch({
                    type: 'FETCH_FAILURE'
                })
            }
        }
    }
}