import { SEARCH_PRODUCT } from './SearchType'
import axios from 'axios'

export const searchProduct = (searchProducts = "") => {
    return {
        type: SEARCH_PRODUCT,
        payload: searchProducts
    }
}

// export const fetchSearchProduct = () => {
//     return dispatch => {
//         let url = `http://localhost:4000/products?`
//         if (search) {
//             url += `q=${search}`
//         }
//         axios.get(url)
//         .then(res => {

//         })
//     }
// }