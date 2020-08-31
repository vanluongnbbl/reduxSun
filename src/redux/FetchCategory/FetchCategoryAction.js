import {
    FETCH_CATEGORY_REQUEST,
    FETCH_CATEGORY_SUCCESS,
    FETCH_CATEGORY_FAILURE
} from './FetchCategoryType'

import axios from 'axios'

export const fetchCategoryRequest = () => {
    return {
        type: FETCH_CATEGORY_REQUEST
    }
}

export const fetchCategorySuccess = (categorys) => {
    return {
        type: FETCH_CATEGORY_SUCCESS,
        payload: categorys
    }
}

export const fetchCategoryFailure = (error) => {
    return {
        type: FETCH_CATEGORY_FAILURE,
        payload: error
    }
}


export const fetchCategory = () => {
    return dispatch => {
        axios.get('http://localhost:4000/categorys')
            .then(res => {
                const categorys = res.data
                dispatch(fetchCategorySuccess(categorys))
            })
            .catch(error => {
                const errorMsg = error.message
                dispatch(fetchCategoryFailure(errorMsg))
            })
    }
}
