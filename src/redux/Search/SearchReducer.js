import { SEARCH_PRODUCT } from './SearchType'

const initialState = {
    searchProducts: ""
}

const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEARCH_PRODUCT:
            return {
                ...state,
                searchProducts: action.payload
            }
        default: return state
    }
}

export default searchReducer