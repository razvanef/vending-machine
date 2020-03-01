import { combineReducers } from 'redux'
import products, { loading } from './products'
import balance from './balance'
import console from './console'

export default combineReducers({
    products,
    balance,
    loading,
    console,
})
