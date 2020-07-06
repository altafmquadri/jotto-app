import checkPropTypes from 'check-prop-types'
import { Component } from 'react'

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