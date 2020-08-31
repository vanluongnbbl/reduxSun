import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { sortProduct, fetchRating } from '../../redux'
import Pagination from './Pagination/Pagination'
import './Product.css'
import ProductItem from './ProductItem/ProductItem'
function Product() {

    const filterRate = useSelector(state => state.filterRate.filterRate)
    const dispatch = useDispatch()
    const productData = useSelector(state => state.product)
    const sort = useSelector(state => state.sortProduct.sort)
    const searchProducts = useSelector(state => state.search.searchProducts)
    const filterCate = useSelector(state => state.filterCategory.filter)

    const [currentPage, setCurrentPage] = useState(1)
    const [productPerPage] = useState(8)
    const [searchProduct, setSearhProduct] = useState(productData.products)

    const indexOfLastPost = currentPage * productPerPage
    const indexOfFirstPost = indexOfLastPost - productPerPage
    const currentPosts = searchProduct.slice(indexOfFirstPost, indexOfLastPost)

    const paginate = (pageNumber) => setCurrentPage(pageNumber)

    useEffect(() => {
        let url = `http://localhost:4000/products?`
        if (searchProducts) {
            url += `q=${searchProducts}`
        }
        axios.get(url)
            .then(res => {
                setSearhProduct(res.data)
            })
            .catch(err => {
                alert(err)
            })

    }, [searchProducts])


    useEffect(() => {
        dispatch(fetchRating())
    }, [])

    useEffect(() => {
        if (sort === "1") {
            setSearhProduct([...searchProduct].sort((a, b) => a.id - b.id))
        }
        else if (sort === "2") {
            setSearhProduct([...searchProduct].sort((a, b) => a.price - b.price))
        } else {
            setSearhProduct([...searchProduct].sort((a, b) => b.price - a.price))
        }
    }, [sort])


    useEffect(() => {
        if (filterCate !== "" || filterRate !== 0) {
            const result = [...productData.products].filter((product) => {
                if (filterCate !== "" && filterRate !== 0) {
                    return (
                        product.category.toLowerCase().indexOf(filterCate.toLowerCase()) !== -1
                        &&
                        product.ranking === filterRate
                    )
                }
                if (filterCate !== "") {
                    return (
                        product.category.toLowerCase().indexOf(filterCate.toLowerCase()) !== -1
                    )
                }
                if (filterRate !== 0) {
                    return (
                        product.ranking === filterRate
                    )
                }
            })
            setSearhProduct(() => [...result])
        }
    }, [filterCate, filterRate])

    return (
        <div className="list-products">
            <div className="head-list">
                <div>
                    <span>Found &nbsp;</span>
                    <span>{searchProduct.length} products in </span>
                    <span>{productData.respondTime} ms</span>
                </div>
                <select
                    value={sort}
                    onChange={e => dispatch(sortProduct(e.target.value))}
                >
                    <option value="1">Featured</option>
                    <option value="2">Price asc.</option>
                    <option value="3">Price desc.</option>
                </select>
            </div>
            <div className="res-time"></div>
            <ProductItem
                productData={productData}
                product={currentPosts}
            />
            <Pagination
                productPerPage={productPerPage}
                totalProduct={searchProduct.length}
                paginate={paginate}
            />

        </div>
    )
}

export default Product
