import { Accordion, AccordionDetails, AccordionSummary, Box, Grid, Paper } from '@mui/material';
import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router';
import { PokemonDetails } from '../types/Types';
import {Error} from '../components/Error'
import useAxios from 'axios-hooks';
import { Loading } from './Loading';
import { Link } from 'react-router-dom';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export const PokemonDetail = () => {
const { name } = useParams();
const [{loading, data, error}] = useAxios((`https://pokeapi.co/api/v2/pokemon/${name?.toLowerCase()}`));
const [{loading: loadingDescription, data: dataDescription, error: errorDescription}] = useAxios(`https://pokeapi.co/api/v2/pokemon-species/${name}`);

const [pokemonDetail, setPokemonDetail] = useState<PokemonDetails>();

useEffect(() => {
  if(!loading && !error && !loadingDescription && !errorDescription){
    setPokemonDetail({
      weight: data.weight,
      attack : data.stats[1].base_stat,
      defense: data.stats[2].base_stat,
      speed: data.stats[5].base_stat,
      ability: data.abilities[0].ability.name,
      sprite: data.sprites.front_shiny,
      description: dataDescription.flavor_text_entries[0].flavor_text,
    })
  }
}, [setPokemonDetail, loading, error, loadingDescription, errorDescription])

    if(loading || loadingDescription)
      return <Loading/>;
    
    if(error || errorDescription) 
      return <Error/>;

  return(
    <Grid>
      <Link className="App-header" to="/">
        POKEDEX
      </Link>

       <Paper style={{marginTop: '5%', padding: 25, textAlign: 'center', backgroundColor: '#803500' }}>
        <Accordion>

         <AccordionSummary expandIcon={<ExpandMoreIcon />} style={{display: 'inline-flex', justifyContent: 'center', alignItems: 'center'}}>
            <h3 style={{ fontSize: '150%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
             {name?.toUpperCase()}</h3>
            <Box component="img" 
              sx={{ height: 300, width: 450}}
              alt={`An image of ${name}`}
              src={pokemonDetail?.sprite}
            />
          </AccordionSummary>

          <AccordionDetails>
            <Grid style={{border: '5px solid #803500'}}>
              <p>Fun fact:</p>
              <p>{pokemonDetail?.description}</p>
            </Grid>
            <Grid style={{border: '5px solid #803500'}}>
             <p>Weight: {pokemonDetail?.weight}</p>
             <p>Speed: {pokemonDetail?.speed}</p>
             <p>Attack: {pokemonDetail?.attack}</p>
             <p>Defense: {pokemonDetail?.defense}</p>
             <p>Ability: {pokemonDetail && pokemonDetail?.ability.charAt(0).toUpperCase() + pokemonDetail?.ability.slice(1)}</p>
           </Grid>
         </AccordionDetails>

        </Accordion>
        </Paper>
    </Grid>
  )
}