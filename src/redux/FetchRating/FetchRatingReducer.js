import {
    FETCH_RATING_REQUEST,
    FETCH_RATING_SUCCESS,
    FETCH_RATING_FAILURE
} from './FetchRatingType'

const initialState = {
    loading: false,
    ratings: [],
    error: ''
}

const fetchRatingReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_RATING_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case FETCH_RATING_SUCCESS:
            return {
                ...state,
                ratings: action.payload,
                error: ''
            }
        case FETCH_RATING_FAILURE:
            return {
                ...state,
                products: [],
                error: action.payload
            }

        default: return state
    }
}

export default fetchRatingReducer