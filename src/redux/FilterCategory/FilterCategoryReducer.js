import { FILTER_CATEGORY } from './FilterCategoryType'

const initialState = {
    filter: "1"
}

const filterCategoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case FILTER_CATEGORY:
            return {
                ...state,
                filter: action.payload
            }
        default: return state
    }
}

export default filterCategoryReducer