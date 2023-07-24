import { useEffect } from 'react'

import wordleService from '../../services/wordleService'
import Board from '../Board/Board'
import Keyboard from '../Keyboard/Keyboard'

export default function Wordle({ solution, words }) {
    const { currentGuess, guesses, turn, isCorrect, usedKeys, handleKeyup, notInWordGuess, setNotInWordGuess, setGuesses } = wordleService(solution, words)

    useEffect(() => {
      window.addEventListener('keyup', handleKeyup)
  
      return () => window.removeEventListener('keyup', handleKeyup)
    }, [handleKeyup])

        const clickHandler = (value) => {
            console.log(value);
            handleKeyup({
                key: value
            })
        };
    // useEffect(() => {

    //   .addEventListener('click', clickHandler)
  
    //   return () => window.removeEventListener('click', clickHandler)
    // }, [handleKeyup])
    
    useEffect(() => {
        console.log(guesses, turn, isCorrect, currentGuess)
      }, [guesses, turn, isCorrect, currentGuess])
  
  return (
    <div>
      <div style={{
        color: 'white',
        textAlign: 'center'
      }}>Current Guess - {currentGuess}</div>
      <Board 
            guesses={guesses} 
            setGuesses={setGuesses}
            currentGuess={currentGuess} 
            turn={turn}
            notInWordGuess={notInWordGuess}
            setNotInWordGuess={setNotInWordGuess} />
      <Keyboard solution={solution} words={words} click={clickHandler} usedKeys={usedKeys}/>
    </div>
  )
}