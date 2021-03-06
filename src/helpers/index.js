
/**
 * @method
 * @param {string} guessedWord - Guessed word. 
 * @param {string} secretWord - Secret word.
 * @returns {number} Number of letters matched between guessed word and secret word
 */
export const getLetterMatchCount = (guessedWord, secretWord) => {
    // console.log(guessedWord, '<--i am guessed word', 'i am secret word -->', secretWord);
    const secretLetterSet = new Set(secretWord.split(''))
    const guessedLetterSet = new Set(guessedWord.split(''))
    return [...secretLetterSet].filter(letter => guessedLetterSet.has(letter)).length
}