import {
  FETCH_POKEMONS_REQUEST,
  FETCH_POKEMONS_SUCCESS,
  FETCH_POKEMONS_FAILURE,
  SELECT_POKEMON_REQUEST,
  SELECT_POKEMON_SUCCESS,
  SELECT_POKEMON_FAILURE,
} from './actionTypes';
import { AnyAction, Dispatch } from 'redux';
import {
  IPokemonListed,
  IPokemon,
  IPokemonDetailed,
  RootState,
} from '../types';
import { IPokemonDetails } from '../../services/api/models';

export const fetchPokemonsRequest = () => ({
  type: FETCH_POKEMONS_REQUEST,
});

export const fetchPokemonsSuccess = (pokemons: IPokemon[]) => ({
  type: FETCH_POKEMONS_SUCCESS,
  payload: pokemons,
});

export const fetchPokemonsFailure = (error: string) => ({
  type: FETCH_POKEMONS_FAILURE,
  payload: error,
});

export const selectPokemonRequest = () => ({
  type: SELECT_POKEMON_REQUEST,
});

export const selectPokemonSuccess = (pokemon: IPokemonDetailed | null) => ({
  type: SELECT_POKEMON_SUCCESS,
  payload: pokemon,
});

export const selectPokemonFailure = (error: string) => ({
  type: SELECT_POKEMON_FAILURE,
  payload: error,
});

export const fetchPokemons =
  () =>
  async (dispatch: Dispatch, getState: () => RootState): Promise<void> => {
    const { pokemons } = getState().pokemons;
    const offset = pokemons.length;
    try {
      dispatch(fetchPokemonsRequest());

      fetch(`https://pokeapi.co/api/v2/pokemon?limit=${20}&offset=${offset}`)
        .then((response) => response.json())
        .then((data) => {
          const promises = data.results.map((pokemon: IPokemonListed) =>
            fetch(pokemon.url)
              .then((response) => response.json())
              .then((data: IPokemonDetails) => ({
                name: data.name,
                sprite: data.sprites.front_default,
                types: data.types.map((type) => type.type.name),
                id: data.id,
              }))
          );

          Promise.all(promises).then((pokemonData) => {
            dispatch(fetchPokemonsSuccess(pokemonData));
          });
        });
    } catch (error) {
      dispatch(fetchPokemonsFailure('error.message'));
    }
  };

export const selectPokemon = (id: number | null) => {
  return async (dispatch: Dispatch<AnyAction>) => {
    dispatch(selectPokemonRequest());

    if (id === null) {
      dispatch(selectPokemonSuccess(null));
      return;
    }

    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      if (!response.ok) {
        throw new Error('Failed to fetch Pokemon.');
      }
      const pokemon: IPokemonDetails = await response.json();
      console.log(pokemon);
      const statistics: Array<{ name: string; number: number }> = [];
      pokemon.stats.forEach((stat) => {
        statistics.push({ name: stat.stat.name, number: stat.base_stat });
      });
      dispatch(
        selectPokemonSuccess({
          name: pokemon.name,
          id: pokemon.id,
          types: pokemon.types.map((type) => type.type.name),
          sprite: pokemon.sprites.front_default,
          stats: statistics,
        })
      );
    } catch (error) {
      dispatch(selectPokemonFailure('error.message'));
    }
  };
};
