import React, { Component } from 'react';
import GuessedWords from '../components/GuessedWords'
import Congrats from '../components/Congrats'
import '../styles/components/App.css'

class App extends Component {
    state = {}
    render() {
        return (
            <div className="container">
                <h1>Jotto</h1>
                <Congrats success={true} />
                <GuessedWords guessedWords={[{ guessedWord: 'train', letterMatchCount: 3 }]} />
            </div>
        )
    }
}

export default App;