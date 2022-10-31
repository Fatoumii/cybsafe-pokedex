import React from 'react';
import { Grid, Button } from '@mui/material';
import {  TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';


type SearchProps = {
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
}

export const SearchBar = ({ setName, name} : SearchProps)  => {
  const redirect = `/profile/${name}`;

  return(
  <Grid style={{display: 'flex', justifyContent: 'center'}}>
    <TextField
      style={{width: '80%', backgroundColor: 'whitesmoke', borderRadius: 5, margin: 20}}
      id="search-bar"
      className="text"
      onChange={(e) => {
       setName(e.target.value);
      }}
      label="Search a Pokemon..."
      variant="outlined"
      placeholder="Search..."
      size="small"
    />
     <Button>
     <Link to={redirect}>
       <SearchIcon />
       </Link>
     </Button>
  </Grid>

)
}