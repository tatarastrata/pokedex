import React, { useEffect, useState } from 'react';
import { SimpleGrid, GridItem, Spinner } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { EType, IPokemon, RootState } from '../../../redux/types';
import { FilterButtons, PokemonCard } from '../../molecules';

const PokemonList: React.FC = ({}) => {
  const [type, setType] = useState<undefined | EType>(undefined);
  const pokemons = useSelector((state: RootState) => state.pokemons.pokemons);
  const isLoading = useSelector((state: RootState) => state.pokemons.loading);

  const [pokemonsFiltered, setPokemonsFiltered] =
    useState<Array<IPokemon>>(pokemons);

  useEffect(() => {
    type === undefined
      ? setPokemonsFiltered(pokemons)
      : setPokemonsFiltered(
          pokemons.filter((pokemon) => pokemon.types.includes(type))
        );
  }, [pokemons, type]);

  return (
    <>
      <FilterButtons handleChange={setType} value={type} />

      <SimpleGrid gap={6} columns={[2, 3, 4]}>
        {pokemonsFiltered.map((pokemon) => (
          <GridItem key={pokemon.name}>
            <PokemonCard pokemon={pokemon} />
          </GridItem>
        ))}
        {isLoading && (
          <Spinner
            m="0 auto"
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
        )}
      </SimpleGrid>
    </>
  );
};

export default PokemonList;
