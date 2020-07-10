import React, { Component } from 'react';
import GuessedWords from '../components/GuessedWords'
import Congrats from '../components/Congrats'
import '../styles/components/App.css'

class App extends Component {
    state = {}

    componentDidMount() {
        return fetch('https://random-word-api.herokuapp.com/word?number=1')
            .then(res => res.json())
            .then(data => console.log(data[0]))
    }
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