import { SORT_PRODUCT } from './SortProductType'

export const sortProduct = (sort = "1") => {
    return {
        type: SORT_PRODUCT,
        payload: sort
    }
}

