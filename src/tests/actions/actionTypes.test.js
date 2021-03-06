import moxios from 'moxios'
import { storeFactory } from '../utils/testUtils'
import { getSecretWord } from '../../actions/actionTypes'


describe('getSecretWord action creator', () => {
    beforeEach(() => {
        moxios.install()
    })
    afterEach(() => {
        moxios.uninstall()
    })
    test('adds response word to state', () => {
        const secretWord = ['party']
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
                expect(newState.secretWord).toBe(secretWord[0])
            })
    })
})

//using fetch
/* describe('getSecretWord action creator using fetch', () => {
    global.fetch = jest.fn(() =>
        Promise.resolve({
            json: () => Promise.resolve(["altaf"]),
        })
    )

    test('adds response word to state', () => {
        const secretWord = 'altaf'
        const store = storeFactory()
        return store.dispatch(getSecretWord())
            .then(() => {
                const newState = store.getState()
                expect(newState.secretWord).toBe(secretWord)
            })
    })
}) */

