import { Grid } from '@mui/material'
import { Link } from 'react-router-dom';
import React, {useState} from 'react'
import { PokemonList } from './PokemonList';
import { SearchBar } from './Search';

export const Home = () => {

  const [pokemonName, setPokemonName] = useState('');

  return(
    <Grid>
      <Link className="App-header" to="/">
       POKEDEX
      </Link>
      <Grid xs ={12} item >
        <SearchBar name={pokemonName} setName={setPokemonName}/>
      </Grid>
      <Grid xs={12} item>
        <PokemonList/>  
      </Grid>       

    </Grid>
  )
}