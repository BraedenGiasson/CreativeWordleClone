import { createContext, useState } from 'react'
import { PreferenceName } from '../utils/preferenceName'
import { board } from '../utils/boardSize'
import { Key } from '../utils/keyboardKeyNames'

const wordleService = (solution, words) => {
  const [turn, setTurn] = useState(0) 
  const [currentGuess, setCurrentGuess] = useState('')
  const [guesses, setGuesses] = useState([...Array(board.rows)]) // each guess is an array
  const [history, setHistory] = useState([]) // each guess is a string
  const [isCorrect, setIsCorrect] = useState(false);
  const [usedKeys, setUsedKeys] = useState({});
  const [notInWordGuess, setNotInWordGuess] = useState(false);

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

    console.log(guesses);

    setGuesses(prevGuesses => {
      let newGuesses = [...prevGuesses]
      newGuesses[turn] = formattedGuess
      return newGuesses
    })

    if (!words.some((word) => word.word === currentGuess)){
      console.log('not in word list');
      setNotInWordGuess(true);
      return null
    }

    setHistory(prevHistory => {
      return [...prevHistory, currentGuess]
    })
    setTurn(prevTurn => {
      return prevTurn + 1
    })
    setUsedKeys((previousUsedKeys) => {
      const newKeys = {...previousUsedKeys};

      formattedGuess.forEach((letter) => {
        const currentGuessType = newKeys[letter.key];

        if (letter.guessType === PreferenceName.CorrectGuess) {
          newKeys[letter.key] = PreferenceName.CorrectGuess;
          return;
        }
        if (letter.guessType === PreferenceName.InWordGuess
          && currentGuessType !== PreferenceName.CorrectGuess) {
          newKeys[letter.key] = PreferenceName.InWordGuess;
          return;
        }
        if (letter.guessType === PreferenceName.IncorrectGuess
          && currentGuessType !== PreferenceName.CorrectGuess
          && currentGuessType !== PreferenceName.InWordGuess) {
          newKeys[letter.key] = PreferenceName.IncorrectGuess;
          return;
        }
      })

      return newKeys;
    })
    setCurrentGuess('')
  }

  // handle keyup event & track current guess
  // if user presses enter, add the new guess
  const handleKeyup = ({ key }) => {
    console.log(key.toLowerCase());
    if (key === Key.Enter || key === Key.UppercaseEnter) {
      // only add guess if turn is less than 5
      if (turn > board.columns) {
        console.log('you used all your guesses!')
        return
      }
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

    if (/^[A-Za-z]$/.test(key.toLowerCase())) {
      if (currentGuess.length < board.columns) {
        console.log(currentGuess);
        setCurrentGuess(prev => prev + key.toLowerCase())
        console.log(currentGuess);
      }
    }

    console.log(currentGuess);
  }

  return {turn, currentGuess, guesses, isCorrect, usedKeys, handleKeyup, notInWordGuess, setNotInWordGuess, setGuesses}
}

export default wordleService