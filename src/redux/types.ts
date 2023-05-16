import { combineReducers } from 'redux';
import pokemonsReducer from './reducers/pokemonsReducer';

export enum EType {
  FIRE = 'fire',
  GRASS = 'grass',
  POISON = 'poison',
  FLYING = 'flying',
  WATER = 'water',
  BUG = 'bug',
  NORMAL = 'normal',
  ELECTRIC = 'electric',
  FAIRY = 'fairy',
  GROUND = 'ground',
  FIGHTING = 'fighting',
  PSYCHIC = 'psychic',
  ROCK = 'rock',
  STEEL = 'steel',
  ICE = 'ice',
  GHOST = 'ghost',
  DRAGON = 'dragon',
  DARK = 'dark',
}

export interface IPokemonListed {
  name: string;
  url: string;
}

export interface IPokemon {
  name: string;
  types: Array<EType>;
  sprite: string;
  id: number;
}

export interface IPokemonDetailed extends IPokemon {
  stats: Array<{ name: string; number: number }>;
}

export interface IPokemonsState {
  loading: boolean;
  error: string | null;
  pokemons: Array<IPokemon>;
  selectedPokemon: IPokemonDetailed | null;
}

const rootReducer = combineReducers({
  pokemons: pokemonsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
