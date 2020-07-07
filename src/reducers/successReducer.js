import { actionTypes } from '../actions/actionTypes'
/**
 * @function successReducer
 * @param {array} state Array of guess words.
 * @param {object} action action to be reduced.
 * @returns {boolean} new success state.
 */
const successReducer = (state = false, action) => {
    switch (action.type) {
        case (actionTypes.CORRECT_GUESS):
            return true

        default:
            return false

    }
}

export default successReducer;