import { Grid } from '@mui/material';
import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router';
import { PokemonDetails } from '../types/Types';
import {Error} from '../components/Error'
import useAxios from 'axios-hooks';
import { Loading } from './Loading';

export const PokemonDetail = () => {
const { name } = useParams();
const [{loading, data, error}] = useAxios((`https://pokeapi.co/api/v2/pokemon/${name?.toLowerCase()}`));
const [pokemonDetail, setPokemonDetail] = useState<PokemonDetails>();

useEffect(() => {
  if(!loading && !error){
    setPokemonDetail({
      weight: data.weight,
      attack : data.stats[1].base_stat,
      defense: data.stats[2].base_stat,
      speed: data.stats[5].base_stat,
      ability: data.abilities[0].ability.name,
      sprite: data.sprites.front_shiny,
      description: '',
    })
  }
}, [setPokemonDetail])

    if(loading)
      return <Loading/>;
    
    if(error) 
      return <Error/>;

  return(
    <Grid>Detail</Grid>
  )
}