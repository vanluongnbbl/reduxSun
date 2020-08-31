import { FILTER_CATEGORY } from './FilterCategoryType'

export const filterCategory = (filter = "1") => {
    return {
        type: FILTER_CATEGORY,
        payload: filter
    }
}
