import {
    SORT_PRODUCT
} from './SortProductType'


const initialState = {
    sort: "1",
}

const SortProductReducer = (state = initialState, action) => {
    switch (action.type) {
        case SORT_PRODUCT:
            return {
                ...state,
                sort: action.payload
            }
        default: return state
    }
}

export default SortProductReducer