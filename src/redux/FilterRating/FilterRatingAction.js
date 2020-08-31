import { FILTER_RATING } from './FilterRatingType'

export const filterRating = (filterRate = 1) => {
    return {
        type: FILTER_RATING,
        payload: filterRate
    }
}