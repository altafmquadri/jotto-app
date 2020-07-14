import React, { Component } from 'react';
import { connect } from 'react-redux'
import { guessWord } from '../actions/actionTypes'


export class UnconnectedInput extends Component {
    state = {
        currentGuess: ''
    }

    submitGuessedWord = e => {
        e.preventDefault()
        const guessedWord = this.state.currentGuess
        if (guessedWord && guessedWord.length > 0) this.props.guessWord(guessedWord)
        this.setState({ currentGuess: '' })
    }


    render() {
        const contents = this.props.success ? null
            : (
                <form className="form-inline">
                    <input
                        className="mb-2 mx-sm-3"
                        type="text"
                        placeholder="Enter Guess"
                        value={this.state.currentGuess}
                        onChange={e => this.setState({ currentGuess: e.target.value })}
                        data-test="input-box"></input>
                    <button
                        data-test="submit-button"
                        className="btn btn-primary mb-2"
                        onClick={this.submitGuessedWord}
                        type="submit">Submit</button>
                </form >
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

export default connect(mapStateToProps, { guessWord })(UnconnectedInput);