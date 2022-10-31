import { Grid, Paper } from "@mui/material";
import React from 'react';
import { Link } from "react-router-dom";
import { Pokemon, Pokemons } from "../types/Types";
import { Error } from "./Error";
import { Loading } from "./Loading";

type PokemonListProps = {
  data: Pokemons;
  loading: boolean;
  error: any;
}

export const PokemonList = ({data, loading, error} : PokemonListProps) => {
  
    if(loading)
      return <Loading/>;
    
    if(error) 
      return <Error/>;

  return (
     <Grid>
      <p style={{color: 'whitesmoke'}}>Select a pokemon below to see more details</p>
        {data.results.map((pokemon : Pokemon, i: number) => {
          return(
              <Paper style={{padding: '5%', margin: 15, border: '5px solid #803500'}} key={i}>
                <Link to={`/profile/${pokemon.name}`} style={{fontSize:'120%', color: 'black'}} >
                  {pokemon.name.toUpperCase()}
                 </Link>
               </Paper>
         )
       })}
      </Grid>
     
  )
      
    
   
  
}