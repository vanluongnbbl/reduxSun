import {
    FETCH_PRODUCT_REQUEST,
    FETCH_PRODUCT_SUCCESS,
    FETCH_PRODUCT_FAILURE
} from './ProductType'

const initialState = {
    loading: false,
    products: [],
    respondTime: 0,
    error: ''
}

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PRODUCT_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case FETCH_PRODUCT_SUCCESS:
            return {
                ...state,
                products: action.payload.products,
                respondTime: action.payload.respondTime,
                error: ''
            }
        case FETCH_PRODUCT_FAILURE:
            return {
                ...state,
                products: [],
                error: action.payload
            }

        default: return state
    }
}

export default productReducer