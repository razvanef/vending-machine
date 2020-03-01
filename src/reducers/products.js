import { GET_PRODUCTS, BUY_PRODUCT } from '../constants/ActionTypes'

const products = (state = [], action) => {
    switch (action.type) {
        case GET_PRODUCTS:
            return [
                ...state,
                ...action.products
            ]
        case BUY_PRODUCT:
            return state.map(product => product.id === action.productId ? {
                        ...product,
                        inventory: product.inventory-1
                    } : product
                )
      default:
        return state
    }
  }
  
export default products
  
export const loading = (state = false, action) => {
    switch (action.type) {
        case 'SET_LOADING':
            return !state
        default:
            return state
    }
}