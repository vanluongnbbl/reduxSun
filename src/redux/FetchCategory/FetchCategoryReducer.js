import {
    FETCH_CATEGORY_REQUEST,
    FETCH_CATEGORY_SUCCESS,
    FETCH_CATEGORY_FAILURE
} from './FetchCategoryType'

const initialState = {
    loading: false,
    categorys: [],
    error: ''
}

const fetchCategoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_CATEGORY_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case FETCH_CATEGORY_SUCCESS:
            return {
                ...state,
                categorys: action.payload,
                error: ''
            }
        case FETCH_CATEGORY_FAILURE:
            return {
                ...state,
                products: [],
                error: action.payload
            }

        default: return state
    }
}

export default fetchCategoryReducer