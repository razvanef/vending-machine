import { SET_MESSAGE, CLEAR_MESSAGE } from '../constants/ActionTypes'
import { MESSAGES } from '../constants/Messages'

const console = (state = MESSAGES.HELLO, action) => {
    switch (action.type) {
        case SET_MESSAGE:
            return action.message
        case CLEAR_MESSAGE:
            return MESSAGES.HELLO
      default:
        return state
    }
  }
  
export default console
  