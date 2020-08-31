import {
    FETCH_PRODUCT_REQUEST,
    FETCH_PRODUCT_SUCCESS,
    FETCH_PRODUCT_FAILURE
} from './ProductType'

import axios from 'axios'

export const fetchProductRequest = () => {
    return {
        type: FETCH_PRODUCT_REQUEST
    }
}

export const fetchProductSuccess = (products, respondTime) => {
    return {
        type: FETCH_PRODUCT_SUCCESS,
        payload: { products, respondTime }
    }
}

export const fetchProductFailure = (error) => {
    return {
        type: FETCH_PRODUCT_FAILURE,
        payload: error
    }
}


export const fetchProduct = () => {
    return dispatch => {
        const now = Date.now()
        axios.get('http://localhost:4000/products')
            .then(res => {
                const respondTime = Date.now() - now
                const products = res.data
                dispatch(fetchProductSuccess(products, respondTime))
            })
            .catch(error => {
                const errorMsg = error.message
                dispatch(fetchProductFailure(errorMsg))
            })
    }
}
