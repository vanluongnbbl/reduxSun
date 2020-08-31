import { FILTER_RATING } from './FilterRatingType'

const initialState = {
    filterRate: 1
}

const filterRatingReducer = (state = initialState, action) => {
    switch (action.type) {
        case FILTER_RATING:
            return {
                ...state,
                filterRate: action.payload
            }
        default: return state
    }
}

export default filterRatingReducer