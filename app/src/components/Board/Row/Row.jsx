import React from 'react'
import { board } from '../../../utils/boardSize'
import './Row.css'

export default function Row({ guess, setGuesses, notInWordGuess, setNotInWordGuess, currentGuess }) {

  /**
   * Figure OUT HOW TO SHAKE
   */

  // if (notInWordGuess) {
  //   setNotInWordGuess(false);
  //   // setGuesses(prevGuesses => {
  //   //   let newGuesses = [...prevGuesses]
  //   //   newGuesses.splice();
  //   //   return newGuesses
  //   // })
    
  //   let letters = currentGuess.split('');  

  //   return (
  //     <div className="row past">
  //       {letters.map((letter, index) => (
  //         <div key={index} className='notInWord'>{letter}</div>
  //       ))}
  //     </div>
  //   )
  // }

  console.log('in s');

  if (guess) {
    const animation_duration = 500; //ms
    
    return (
      <div className="row past">
        {guess.map((letter, index) => (
          <div style={{
            animationDelay: `${(index * animation_duration) / 2}ms`,
          }} key={index} className={letter.guessType}>{letter.key}</div>
        ))}
      </div>
    )
  }

  if (currentGuess) {
    let letters = currentGuess.split('');  
    
    if (notInWordGuess) { 
      return (
        <div className="row">
          {letters.map((letter, index) => (
            <div key={index} className="notInWord">{letter}</div>
          ))}
          {[...Array(board.columns - letters.length)].map((_, index) => (
            <div key={index} className="notInWord"></div>
          ))}
      </div>
      )
    }

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