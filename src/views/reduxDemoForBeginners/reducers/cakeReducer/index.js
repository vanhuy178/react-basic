import * as types from '../../actions/actionTypes'
const initialCakeState = {
    numberOfCake: 10
}

export const cakeReducer = (state = initialCakeState, action) => {
    switch (action.type) {
        case types.BUY_CAKE:
            return {
                ...state,
                numberOfCake: state.numberOfCake - 1
            }
        default:
            return state
    }
}

