import { BUY_PRODUCT, ADD_MONEY } from '../constants/ActionTypes'

const balance = (state = 0, action) => {
    switch (action.type) {
        case ADD_MONEY:
            return state + action.coin
        case BUY_PRODUCT:
            return state - action.price
      default:
        return state
    }
  }
  
export default balance
  