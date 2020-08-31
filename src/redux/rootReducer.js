import { combineReducers } from 'redux'

import productReducer from './Product/ProductReducer'
import searchReducer from './Search/SearchReducer'
import SortProductReducer from './SortProduct/SortProductReducer'
import filterCategoryReducer from './FilterCategory/FilterCategoryReducer'
import fetchCategoryReducer from './FetchCategory/FetchCategoryReducer'
import fetchRatingReducer from './FetchRating/FetchRatingReducer'
import filterRatingReducer from './FilterRating/FilterRatingReducer'

const rootReducer = combineReducers({
    product: productReducer,
    search: searchReducer,
    sortProduct: SortProductReducer,
    filterCategory: filterCategoryReducer,
    fetchCategory: fetchCategoryReducer,
    fetchRating: fetchRatingReducer,
    filterRate: filterRatingReducer
})

export default rootReducer