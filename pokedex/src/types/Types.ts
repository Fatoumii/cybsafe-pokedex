export interface Pokemons {
  results: Pokemon[]
}

export interface Pokemon {
  name: string;
  url: string;
}

export interface PokemonDetails {
  weight: number;
  attack: number;
  defense: number;
  speed: number;
  ability: string;
  sprite: string;
  description: string;
}
