import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCategory } from '../../../redux/FetchCategory/FetchCategoryAction';
import { filterCategory } from '../../../redux/FilterCategory/FilterCategoryAction';

function Category() {
    const fetchCate = useSelector(state => state.fetchCategory.categorys)

    const dispatch = useDispatch()


    const [isOpen, setIsOpen] = useState(0)
    const [subCate, setSubCate] = useState(false)

    const toggleSubCate = () => {
        setSubCate(!subCate)
    }

    const toggle = (id, value) => {
        setIsOpen(id)
        dispatch(filterCategory(value))
    }

    useEffect(() => {
        dispatch(fetchCategory())
    }, [dispatch])

    return (
        <div className="category">
            <div className="category__title">Show results for</div>
            {
                fetchCate.map((category, i) =>
                    <div className="category__content" key={i}>
                        <div className={isOpen === category.id ?
                            "category__item active-category" :
                            "category__item"}
                            onClick={() => {
                                toggle(
                                    category.id,
                                    category.category
                                )
                            }}
                        >
                            {category.name}
                        </div>
                    </div>
                )
            }

        </div>
    )


}
export default Category
