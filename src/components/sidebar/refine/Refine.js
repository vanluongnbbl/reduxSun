import React from 'react'
import Type from './type/Type'
import Rating from './rating/Rating'
import Price from './price/Price'

function Refine() {



    return (
        <div className="refine">
            <div className="category__title">Refine by</div>
            <Type />
            <Rating
            />
            <Price />
        </div>
    )
}

export default Refine
