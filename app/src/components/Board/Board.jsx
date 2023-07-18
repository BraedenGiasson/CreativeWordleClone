import React from 'react'
import Row from './Row/Row'

// components
export default function Board({ guesses, currentGuess, turn, notInWordGuess, setNotInWordGuess }) {
  return (
    <div>
      {guesses.map((guess, index) => {
        if (turn === index) {
          console.log(turn + ' ' + index);
          return <Row 
                      key={index}
                      currentGuess={currentGuess}
                      notInWordGuess={notInWordGuess}
                      setNotInWordGuess={setNotInWordGuess} />
        }

        return <Row 
                    key={index} 
                    guess={guess}
                    notInWordGuess={notInWordGuess}
                    setNotInWordGuess={setNotInWordGuess} /> 
      })}
    </div>
  )
}