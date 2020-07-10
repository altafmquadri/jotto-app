import axios from 'axios'
import { getLetterMatchCount } from '../helpers/index'

export const actionTypes = {
    CORRECT_GUESS: 'CORRECT_GUESS',
    GUESS_WORD: 'GUESS_WORD',
    SET_SECRET_WORD: 'SET_SECRET_WORD'
}

/**
 * Returns Redux Thunk function that dispatches GUESS_WORD action
 * and (conditionally) CORRECT_GUESS action
 * @function guessWord
 * @param {string} guessedWord - guessed word
 * @returns {function} - Redux Thunk function 
 */
export const guessWord = (guessedWord) => {
    return (dispatch, getState) => {
        const secretWord = getState().secretWord
        const letterMatchCount = getLetterMatchCount(guessedWord, secretWord)

        dispatch({
            type: actionTypes.GUESS_WORD,
            payload: {
                guessedWord,
                letterMatchCount
            }
        })

        if (guessedWord === secretWord) {
            dispatch({
                type: actionTypes.CORRECT_GUESS
            })
        }
    }
}

// export const getSecretWord = () => {
//     return (dispatch) => {
//         return axios.get('https://random-word-api.herokuapp.com/word?number=1')
//             .then(response => {
//                 dispatch({
//                     type: actionTypes.SET_SECRET_WORD,
//                     payload: response.data
//                 })
//             })
//     }
// }

//using fetch
export const getSecretWord = () => {
    return (dispatch) => {
        return fetch('https://random-word-api.herokuapp.com/word?number=1')
            .then(res => res.json())
            .then(data => {
                dispatch({
                    type: actionTypes.SET_SECRET_WORD,
                    payload: data[0]
                })
            })
    }
}
