import moxios from 'moxios'
import { storeFactory } from '../utils/testUtils'
import { getSecretWord } from '../../actions/actionTypes'
import secretWordReducer from '../../reducers/secretWordReducer'

describe('getSecretWord action creator', () => {
    beforeEach(() => {
        moxios.install()
    })
    afterEach(() => {
        moxios.uninstall()
    })
    test('adds response word to state', () => {
        const secretWord = 'party'
        const store = storeFactory()

        moxios.wait(() => {
            const request = moxios.requests.mostRecent()
            request.respondWith({
                status: 200,
                response: secretWord
            })
        })
        return store.dispatch(getSecretWord())
            .then(() => {
                const newState = store.getState() //since i am using a different api, might need to change newState to be store.getState()[0] since an array is returned
                expect(newState.secretWord).toBe(secretWord)
            })
    })
})

