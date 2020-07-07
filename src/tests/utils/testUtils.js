import checkPropTypes from 'check-prop-types'
import {createStore} from 'redux'
import rootReducer from '../../reducers/index'


/**
 * Create a testing store with imported reducers, middleware, and initial state
 * @param {object} initialState -Initial state for store
 * @function store Factory
 * @returns {Store} - Redux store
 */
export const storeFactory = (initialState) => {
    return createStore(rootReducer, initialState)
}




/**
 * 
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper.
 * @param {string} val - Value of data-test attribute for search
 * @returns {ShallowWrapper}
 */
export const findByTestAttr = (wrapper, val) => (
    wrapper.find(`[data-test="${val}"]`)
)


export const checkProps = (component, conformingProps) => {
    const propError = checkPropTypes(
        component.propTypes, 
        conformingProps, 
        'prop', 
        component.name)
        expect(propError).toBeUndefined()
}