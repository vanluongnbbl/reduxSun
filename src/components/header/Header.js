import React from 'react'
import './header.css'
import { useSelector, useDispatch } from 'react-redux'
import { searchProduct } from '../../redux'

function Header() {
    const searchProducts = useSelector(state => state.search.searchProducts)
    const dispatch = useDispatch()
    // console.log("searchProducts", searchProducts)

    return (
        <header>
            <div>
                <div className="brand">Amazing</div>
                <div className="input-search">
                    <input
                        type="text"
                        placeholder="Search a product"
                        value={searchProducts}
                        // name={searchProducts}
                        onChange={e => dispatch(searchProduct(e.target.value))}
                    />
                    <button>search</button>
                </div>
            </div>
        </header>
    )
}

export default Header
