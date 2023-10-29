import React from 'react'
import Row from './Row/Row'

// components
export default function Board({ guesses, setGuesses, currentGuess, turn, notInWordGuess, setNotInWordGuess }) {

  console.log(guesses);

  return (
    <div>
      {guesses.map((guess, index) => {
        if (turn === index) {
          return <Row 
                      key={index}                      
                      setGuesses={setGuesses}
                      notInWordGuess={notInWordGuess}
                      setNotInWordGuess={setNotInWordGuess}
                      currentGuess={currentGuess} />
        }

        return <Row 
                    key={index} 
                    guess={guess}
                    setGuesses={setGuesses}
                    notInWordGuess={notInWordGuess}
                    setNotInWordGuess={setNotInWordGuess} /> 
      })}
    </div>
  )
}