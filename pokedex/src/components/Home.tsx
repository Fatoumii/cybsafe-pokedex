import { Grid } from '@mui/material'
import { Link } from 'react-router-dom';
import React, {useState} from 'react'
import { PokemonList } from './PokemonList';
import { SearchBar } from './Search';
import useAxios from 'axios-hooks';

export const Home = () => {

  const [{loading, data, error}, refetch] = useAxios(("https://pokeapi.co/api/v2/pokemon"));
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
        <PokemonList data={data} loading={loading} error={error}/>  
      </Grid>       

    </Grid>
  )
}