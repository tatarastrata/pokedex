import React from 'react';
import { IPokemonCardPropTypes } from './PokemonCardPropTypes';
import { HStack, Heading, Box, Image, VStack } from '@chakra-ui/react';
import { TypeBadge } from '../../atoms';
import { selectPokemon } from '../../../redux/actions/actions';
import { useDispatch } from 'react-redux';

const PokemonCard: React.FC<IPokemonCardPropTypes> = ({ pokemon }) => {
  const dispatch = useDispatch();
  const handlePokemonSelect = async (): Promise<void> => {
    await dispatch(selectPokemon(pokemon.id) as any);
  };

  return (
    <Box
      as="button"
      onClick={handlePokemonSelect}
      p={2}
      borderWidth="1px"
      borderColor="gray.200"
      w="100%"
    >
      <VStack w="100%">
        <Image src={pokemon.sprite} alt={pokemon.name} />
        <Heading as="h4" size="md" textTransform="capitalize">
          {pokemon.name}
        </Heading>

        <HStack alignItems={'flex-start'}>
          {pokemon.types.map((type) => (
            <TypeBadge key={type} type={type} />
          ))}
        </HStack>
      </VStack>
    </Box>
  );
};

export default PokemonCard;
