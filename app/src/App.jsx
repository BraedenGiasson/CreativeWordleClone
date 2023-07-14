import { useState, useEffect, useContext } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Navbar } from '../src/components/Navbar/Navbar'
import Grid from '@mui/material/Unstable_Grid2'
import { Tile } from '../src/components/Board/Tile/Tile'

import { board } from './utils/boardSize'
import Preferences from './utils/updatePreferences'
import wordleService from './services/wordleService'
import Wordle from './components/Wordle/Wordle'

function App() {
  const [solution, setSolution] = useState(null);
  const [allWords, setAllWords] = useState([]);
  
  useEffect(() => {
    fetch('http://localhost:3001/sixLetterWords')
      .then(res => res.json())
      .then(json => {
        const randomWord = json[Math.floor(Math.random() * json.length)];
        console.log(randomWord.word);
        setSolution(randomWord.word);
        setAllWords(json);
      })
  }, [setSolution])

  return (
    <>
      <Navbar/>
      {solution && <Wordle solution={solution} words={allWords}/>}

      {solution && <div style={{
        textAlign: 'center'
      }}>Word is: {solution}</div>}
    </>
  )
}

export default App
