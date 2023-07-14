import React from 'react'
import Row from './Row/Row'

// components
export default function Board({ guesses, currentGuess, turn }) {
  return (
    <div>
      {guesses.map((guess, index) => {
        if (turn === index) {
          return <Row key={index} currentGuess={currentGuess} />
        }

        return <Row key={index} guess={guess}/> 
      })}
    </div>
  )
}