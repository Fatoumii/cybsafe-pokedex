import { Grid } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

export const Error = () => {
  return(
    <Grid>
      <Link className="App-header" to="/">
         POKEDEX
      </Link>
      <p style={{color: 'whitesmoke', padding: 50}}>Whoops! Looks like we couldn't find what you were looking for, try searching again.</p>
    </Grid>
  )
}