import * as types from '../../actions/actionTypes'

const initialIceCreamState = {
    numberOfIceCream: 20
}

export const iceCreamReducer = (state = initialIceCreamState, action) => {
    switch (action.type) {
        case types.BUY_ICECREAM:
            return {
                ...state,
                numberOfIceCream: state.numberOfIceCream - 1
            }
        default:
            return state
    }
}