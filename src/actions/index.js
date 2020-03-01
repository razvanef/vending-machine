import vendo from '../api/products'
import * as types from '../constants/ActionTypes'
import { MESSAGES } from '../constants/Messages'

const receiveProducts = products => ({
    type: types.GET_PRODUCTS,
    products
})

export const getAllProducts = () => dispatch => {
    vendo.getProducts(products => {
        dispatch(receiveProducts(products))
    })
}

export const buyProduct = (productId) => (dispatch, getState) => {
    const { products, balance } = getState();
    const product = products.find(product => product.id === productId);
    if (!product) {
        dispatch(setMessage(MESSAGES.WRONG_PRODUCT))
        return
    }
    const { inventory, price } = product
    
    if (inventory === 0) {
        dispatch(setMessage(MESSAGES.OUT_OF_STOCK))
        return
    }

    if (balance < price) {
        dispatch(setMessage(MESSAGES.ADD_CREDIT))
        return
    }
    
    dispatch(setLoading())
    dispatch(setMessage(MESSAGES.LOADING))
    setTimeout(() => {
        dispatch({
            type: types.BUY_PRODUCT,
            productId,
            price,
        })
    }, 3000)
}

const setMessage = (message) => (dispatch) => {
    dispatch({
        type: types.SET_MESSAGE,
        message: message
    })
    setTimeout(() => {
        dispatch({ type: types.CLEAR_MESSAGE })
    }, 3000)
}

const setLoading = () => (dispatch) => {
    dispatch({ type: types.SET_LOADING })
    setTimeout(() => {
        dispatch({ type: types.SET_LOADING })
    }, 3000)
}

export const addMoney = (coin) => dispatch => {
    dispatch({
        type: types.ADD_MONEY,
        coin,
    })
}