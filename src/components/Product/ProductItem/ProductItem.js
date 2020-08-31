import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import axios from 'axios'
function ProductItem({ productData, product }) {


    // console.log("productData", searchProduct)

    return (
        productData?.loading ?
            <h1>LOADINGGGG.........</h1> :
            productData?.error ?
                <h2>{productData.error}</h2> :
                (<div className="row">

                    {
                        product && product.map((product, i) =>
                            <div className="col-3 product" key={i}>
                                <div className="product__item">
                                    <img src={product.images} alt="product img" />
                                    <div className="product__name">{product.name}</div>
                                    <div className="product__type">{product.type}</div>
                                    <div className="rating-price">
                                        <div className="product__rating">
                                            {product.ranking === 5 ?
                                                <div className="rating__item">
                                                    <span className="star star-full"></span>
                                                    <span className="star star-full"></span>
                                                    <span className="star star-full"></span>
                                                    <span className="star star-full"></span>
                                                    <span className="star star-full"></span>
                                                </div> :
                                                product.ranking === 4 ?
                                                    <div className="rating__item">
                                                        <span className="star star-full"></span>
                                                        <span className="star star-full"></span>
                                                        <span className="star star-full"></span>
                                                        <span className="star star-full"></span>
                                                        <span className="star star-non"></span>
                                                    </div> :
                                                    product.ranking === 3 ?
                                                        <div className="rating__item">
                                                            <span className="star star-full"></span>
                                                            <span className="star star-full"></span>
                                                            <span className="star star-full"></span>
                                                            <span className="star star-non"></span>
                                                            <span className="star star-non"></span>
                                                        </div> :
                                                        product.ranking === 2 ?
                                                            <div className="rating__item">
                                                                <span className="star star-full"></span>
                                                                <span className="star star-full"></span>
                                                                <span className="star star-non"></span>
                                                                <span className="star star-non"></span>
                                                                <span className="star star-non"></span>
                                                            </div> :
                                                            <div className="rating__item">
                                                                <span className="star star-full"></span>
                                                                <span className="star star-non"></span>
                                                                <span className="star star-non"></span>
                                                                <span className="star star-non"></span>
                                                                <span className="star star-non"></span>
                                                            </div>}
                                        </div>
                                        <div className="product__price"><strong>$</strong>{product.price}</div>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>)

    )
}

export default ProductItem  
