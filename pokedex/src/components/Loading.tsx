import { Grid } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

export const Loading = () => {
  return (
    <Grid>
      <Link className="App-header" to="/">
        POKEDEX
      </Link>
      <p style={{color: 'whitesmoke'}}>Loading...</p>
    </Grid>
  )
}