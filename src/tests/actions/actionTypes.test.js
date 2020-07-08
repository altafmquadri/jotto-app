import { correctGuess } from '../../actions/actionTypes'

describe('correctGuess', () => {
    test('return an action with type `CORRECT_GUESS`', () => {
        const action = correctGuess()
        expect(action).toEqual({ type: 'CORRECT_GUESS' })
    })
})