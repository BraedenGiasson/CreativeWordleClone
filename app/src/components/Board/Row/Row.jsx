import React from 'react'
import { board } from '../../../utils/boardSize'
import './Row.css'

export default function Row({ guess, setGuesses, currentGuess, notInWordGuess, setNotInWordGuess }) {
 
  if (currentGuess && notInWordGuess) {
    const theGuess = currentGuess;

    setGuesses(prevGuesses => {
      let newGuesses = [...prevGuesses]
      console.log(newGuesses);
      newGuesses.splice();
      console.log(newGuesses);
      return newGuesses
    })

    console.log(notInWordGuess);

    setNotInWordGuess(false);

    console.log(notInWordGuess);
    console.log(theGuess);
    
    return (
      <div className="row past">
        {theGuess.map((letter, index) => (
          <div style={{
            // animationDelay: `${(index * animation_duration) / 1.35}ms`
            // animationDelay: notInWordGuess ? `${(index * animation_duration) / 2}ms` : '0ms',
            animation: 'shake 0.82s cubic-bezier(.36,.07,.19,.97) both',
            transform: 'translate3d(0, 0, 0)',
            backfaceVisibility: 'hidden',
            perspective: '1000px',
          }} key={index} >{letter.key}</div>
        ))}
      </div>
    )
  }

  if (guess) {
    const animation_duration = 500; //ms

    // console.log(notInWordGuess);

    // setNotInWordGuess(!notInWordGuess);
    
    return (
      <div className="row past">
        {guess.map((letter, index) => (
          <div style={{
            // animationDelay: `${(index * animation_duration) / 1.35}ms`
            animationDelay: notInWordGuess ? `${(index * animation_duration) / 2}ms` : '0ms',
            // animation: !notInWordGuess ? 'shake 0.82s cubic-bezier(.36,.07,.19,.97) both' : 'none',
            // transform: !notInWordGuess ? 'translate3d(0, 0, 0)' : 'none',
            // backfaceVisibility: !notInWordGuess ? 'hidden' : 'unset',
            // perspective: !notInWordGuess ? '1000px' : '0px',
          }} key={index} className={letter.guessType}>{letter.key}</div>
        ))}
      </div>
    )
  }

  if (currentGuess) {
    let letters = currentGuess.split('')

    return (
      <div className="row current">
        {letters.map((letter, index) => (
          <div key={index} className="filled">{letter}</div>
        ))}
        {[...Array(board.columns - letters.length)].map((_, index) => (
          <div key={index}></div>
        ))}
      </div>
    )
  }

  return (
    <div className="row">
      {[...Array(board.columns)].map((guess, index) => {
        return <div key={index}/> 
      })}
    </div>
  )
  
}