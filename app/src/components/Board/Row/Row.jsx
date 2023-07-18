import React from 'react'
import { board } from '../../../utils/boardSize'
import './Row.css'

export default function Row({ guess, currentGuess, notInWordGuess, setNotInWordGuess }) {

  if (guess) {
    const animation_duration = 500; //ms

    // {guess.map((letter, index) => {
    //   console.log(index);
    //   console.log((index * animation_duration) / 2)
    // })}

    const isNotInWord = notInWordGuess;
    console.log(isNotInWord);

    setNotInWordGuess(false);

    console.log(isNotInWord);
    
    return (
      <div className="row past">
        {guess.map((letter, index) => (
          <div style={{
            // animationDelay: `${(index * animation_duration) / 1.35}ms`
            animationDelay: `${(index * animation_duration) / 2}ms`,
            animation: 'shake 0.82s cubic-bezier(.36,.07,.19,.97) both',
            transform: 'translate3d(0, 0, 0)',
            backfaceVisibility: 'hidden',
            perspective: '1000px',
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