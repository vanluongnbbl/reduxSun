import {
    FETCH_RATING_REQUEST,
    FETCH_RATING_SUCCESS,
    FETCH_RATING_FAILURE
} from './FetchRatingType'

import axios from 'axios'

export const fetchRatingRequest = () => {
    return {
        type: FETCH_RATING_REQUEST
    }
}

export const fetchRatingSuccess = (ratings) => {
    return {
        type: FETCH_RATING_SUCCESS,
        payload: ratings
    }
}

export const fetchRatingFailure = (error) => {
    return {
        type: FETCH_RATING_FAILURE,
        payload: error
    }
}


export const fetchRating = () => {
    return dispatch => {
        axios.get('http://localhost:4000/ratings')
            .then(res => {
                const ratings = res.data
                dispatch(fetchRatingSuccess(ratings))
            })
            .catch(error => {
                const errorMsg = error.message
                dispatch(fetchRatingFailure(errorMsg))
            })
    }
}
