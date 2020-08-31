import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { filterRating } from '../../../../redux'
import axios from 'axios'

function Rating() {

    const [star, setStar] = useState([])
    const dispatch = useDispatch()

    useEffect(() => {
        axios.get('http://localhost:4000/ratings')
            .then(res => {
                setStar(res.data)
            })
            .catch(error => {
                console.log(error)
            })
    }, [])

    const filRate = (id) => {
        dispatch(filterRating(id))
    }

    const wrapShowStar = (stars) => {
        let result = []
        stars.forEach((star, i) => {
            result.push(<div
                key={i}
                onClick={() => {
                    filRate(star.id)
                }}
                className="rating__item">{showStar(star.id)}</div>)
        })
        return result
    }

    const showStar = (star) => {
        let result = []
        for (let i = 1; i <= star; i++) {
            result.push(<span key={i} className="star star-full"></span>)
        }
        for (let i = star + 1; i <= 5; i++) {
            result.push(<span
                key={i}
                className="star star-non"
            >
            </span>)
        }

        return result
    }

    return (
        <div className="rating">
            <div className="refine-title">Rating</div>

            {wrapShowStar(star)}
        </div>
    )
}

export default Rating
