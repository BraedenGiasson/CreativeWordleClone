import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Navbar } from './components/Navbar/Navbar'
import Grid from '@mui/material/Unstable_Grid2'
import { Tile } from './components/Board/Tile/Tile'

import { board } from './utils/boardSize'

function App() {
  

  return (
    <>
      <Navbar/>

      <div id='main_section'>
        <Grid container spacing={1} direction={'row'} className='board'>
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

          {[...Array(board.rows)].map((_, index) => (
            <Grid item xs={2}
                  direction={'row'}>
              <Tile value={"b"}/>
              </Grid> 
          ))}
        </Grid>
      </div>
    </>
  )
}

export default App
