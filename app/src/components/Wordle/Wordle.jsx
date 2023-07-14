import { useEffect } from 'react'

import wordleService from '../../services/wordleService'
import Board from '../Board/Board'

export default function Wordle({ solution, words }) {
    const { currentGuess, guesses, turn, isCorrect, handleKeyup } = wordleService(solution, words)

    useEffect(() => {
      window.addEventListener('keyup', handleKeyup)
  
      return () => window.removeEventListener('keyup', handleKeyup)
    }, [handleKeyup])

    useEffect(() => {
        console.log(guesses, turn, isCorrect)
      }, [guesses, turn, isCorrect])
  
  return (
    <div>
      <div style={{
        color: 'white',
        textAlign: 'center'
      }}>Current Guess - {currentGuess}</div>
      <Board guesses={guesses} currentGuess={currentGuess} turn={turn} />
    </div>
  )
}