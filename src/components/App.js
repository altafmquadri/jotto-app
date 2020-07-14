import React, { Component } from 'react';
import { connect } from 'react-redux'
import GuessedWords from '../components/GuessedWords'
import Congrats from '../components/Congrats'
import { getSecretWord } from '../actions/actionTypes'
import Input from '../components/Input'
import '../styles/components/App.css'

export class UnconnectedApp extends Component {
    /**
     * @method componentDidMount
     * @returns {undefined}
     */
    componentDidMount() {
        //get the secret word
        this.props.getSecretWord()
    }

    render() {
        return (
            <div className="container">
                <h1>Jotto</h1>
                <div>
                    The secret word is {this.props.secretWord}
                </div>
                <Congrats success={this.props.success} />
                <Input />
                <GuessedWords guessedWords={this.props.guessedWords} />
            </div>
        )
    }
}

const mapStateToProps = state => {
    const { success, guessedWords, secretWord } = state
    return { success, guessedWords, secretWord }
}

export default connect(mapStateToProps, { getSecretWord })(UnconnectedApp)