import { createContext, useState } from 'react'
import { PreferenceName } from '../utils/preferenceName'
import { board } from '../utils/boardSize'
import { Key } from '../utils/keyboardKeyNames'

const wordleService = (solution) => {
  const [turn, setTurn] = useState(0) 
  const [currentGuess, setCurrentGuess] = useState('')
  const [guesses, setGuesses] = useState([...Array(board.rows)]) // each guess is an array
  const [history, setHistory] = useState([]) // each guess is a string
  const [isCorrect, setIsCorrect] = useState(false)

  // format a guess into an array of letter objects 
  // e.g. [{key: 'a', color: 'yellow'}]
  const formatGuess = () => {
    let solutionArray = [...solution]
    let formattedGuess = [...currentGuess].map((l) => {
      return {key: l, guessType: PreferenceName.IncorrectGuess}
    })

    // find any green letters
    formattedGuess.forEach((l, i) => {
      if (solution[i] === l.key) {
        formattedGuess[i].guessType = PreferenceName.CorrectGuess
        solutionArray[i] = null
      }
    })
    
    // find any yellow letters
    formattedGuess.forEach((l, i) => {
      if (solutionArray.includes(l.key) && l.guessType !== PreferenceName.CorrectGuess) {
        formattedGuess[i].guessType = PreferenceName.InWordGuess
        solutionArray[solutionArray.indexOf(l.key)] = null
      }
    })

    return formattedGuess
  }

  // add a new guess to the guesses state
  // update the isCorrect state if the guess is correct
  // add one to the turn state
  const addNewGuess = (formattedGuess) => {
    if (currentGuess === solution) {
      setIsCorrect(true)
    }

    setGuesses(prevGuesses => {
      let newGuesses = [...prevGuesses]
      newGuesses[turn] = formattedGuess
      return newGuesses
    })
    setHistory(prevHistory => {
      return [...prevHistory, currentGuess]
    })
    setTurn(prevTurn => {
      return prevTurn + 1
    })
    setCurrentGuess('')
  }

  // handle keyup event & track current guess
  // if user presses enter, add the new guess
  const handleKeyup = ({ key }) => {
    if (key === Key.Enter) {
      // only add guess if turn is less than 5
      if (turn > board.columns) {
        console.log('you used all your guesses!')
        return
      }
      // // do not allow duplicate words
      // if (history.includes(currentGuess)) {
      //   console.log('you already tried that word.')
      //   return
      // }
      // check word is 5 chars
      if (currentGuess.length !== board.columns) {
        console.log('word must be %d chars.', board.columns)
        return
      }

      const formatted = formatGuess();
      addNewGuess(formatted);
    }

    if (key === Key.Backspace || key === Key.Delete) {
      setCurrentGuess(prev => prev.slice(0, -1))
      return
    }

    if (/^[A-Za-z]$/.test(key)) {
      if (currentGuess.length < board.columns) {
        setCurrentGuess(prev => prev + key)
      }
    }
  }

  return {turn, currentGuess, guesses, isCorrect, handleKeyup}
}

export default wordleService