import React, { useEffect, useCallback } from 'react';
import { Heading, VStack } from '@chakra-ui/react';
import { PokemonList } from '../../templates';
import { LoadMoreButton } from '../../atoms';
import { fetchPokemons } from '../../../redux/actions/actions';
import { useDispatch } from 'react-redux';
import { PokemonDetails } from '../../organisms';

const IndexPage: React.FC = () => {
  const dispatch = useDispatch();

  const fetchData = useCallback(async (): Promise<void> => {
    await dispatch(fetchPokemons() as any);
  }, [dispatch]);

  useEffect(() => {
    fetchData();
  }, [dispatch, fetchData]);

  return (
    <VStack w="100%" p={4} spacing={4}>
      <Heading>Pokedex</Heading>
      <PokemonList />
      <LoadMoreButton action={fetchData} />

      <PokemonDetails />
    </VStack>
  );
};

export default IndexPage;
