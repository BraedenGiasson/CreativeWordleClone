import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Navbar } from '../src/components/Navbar/Navbar'
import Grid from '@mui/material/Unstable_Grid2'
import { Tile } from '../src/components/Board/Tile/Tile'

import { board } from './utils/boardSize'
import Preferences from './utils/updatePreferences'

function App() {

  const [solution, setSolution] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3001/fiveLetterWords')
      .then(res => res.json())
      .then(json => {
        console.log(json);
        const randomWord = json[Math.floor(Math.random() * json.length)];
        console.log(randomWord.word);
        setSolution(randomWord.word);
      })
  }, [setSolution])

  return (
    <>
      <Navbar/>

      <div id='main_section'>
        <Grid container spacing={1} direction={'column'} className='board'>
          {[...Array(board.rows)].map((_, index) => (
            <Grid key={crypto.randomUUID()} container spacing={1} direction={'row'} className='board'>
              {/* <Grid container direction={'row'}>
            <Grid item xs={2}>
              <Tile value={"a"} />
            </Grid>
            <Grid item xs={2}>
              <Tile value={"p"} />
            </Grid>
            <Grid item xs={2}>
              <Tile value={"p"} />
            </Grid>
            <Grid item xs={2}>
              <Tile value={"l"} />
            </Grid>
            <Grid item xs={2}>
              <Tile value={"e"} />
            </Grid>
            <Grid item xs={2}>
              <Tile value={"s"} />
            </Grid>
          </Grid> */}

              {[...Array(board.columns)].map((_, index) => (
                <Grid key={crypto.randomUUID()}
                  item xs={2}
                  direction={'row'}>
                  <Tile value={""} />
                </Grid>
              ))}
            </Grid>
          ))}
        </Grid>
      </div>

      {solution && <div style={{
        textAlign: 'center'
      }}>Word is: {solution}</div>}
    </>
  )
}

export default App
