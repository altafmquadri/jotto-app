import React, { Component } from 'react';
import { connect } from 'react-redux'


class Input extends Component {
    render() {
        const contents = this.props.success ? null
            : (
                <form className="form-inline">
                    <input
                        className="mb-2 mx-sm-3"
                        type="text"
                        placeholder="Enter Guess"
                        data-test="input-box"></input>
                    <button
                        data-test="submit-button"
                        className="btn btn-primary mb-2"
                        type="submit"></button>
                </form>
            )
        return (
            <div data-test="component-input">
                {contents}
            </div>
        )
    }
}

const mapStateToProps = ({ success }) => {
    return { success }
}

export default connect(mapStateToProps)(Input);