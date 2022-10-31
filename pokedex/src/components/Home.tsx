import { Grid } from '@mui/material'
import { Route, Routes, Link } from 'react-router-dom';

import React from 'react'

export const Home = () => {
  return(
    <Grid>
      <Link className="App-header" to="/">
       POKEDEX
      </Link>
    </Grid>
  )
}