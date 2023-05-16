import {
  FETCH_POKEMONS_REQUEST,
  FETCH_POKEMONS_SUCCESS,
  FETCH_POKEMONS_FAILURE,
  SELECT_POKEMON_SUCCESS,
  SELECT_POKEMON_REQUEST,
  SELECT_POKEMON_FAILURE,
} from '../actions/actionTypes';
import { IPokemonsState } from '../types';

const initialState: IPokemonsState = {
  loading: false,
  error: null,
  pokemons: [],
  selectedPokemon: null,
};

const pokemonsReducer = (state = initialState, action: any): IPokemonsState => {
  switch (action.type) {
    case FETCH_POKEMONS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_POKEMONS_SUCCESS:
      return {
        ...state,
        loading: false,
        pokemons: state.pokemons.concat(action.payload),
      };
    case FETCH_POKEMONS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case SELECT_POKEMON_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case SELECT_POKEMON_SUCCESS:
      return {
        ...state,
        loading: false,
        selectedPokemon: action.payload,
      };
    case SELECT_POKEMON_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default pokemonsReducer;
