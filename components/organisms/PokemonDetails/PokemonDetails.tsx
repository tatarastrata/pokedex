import React from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  Heading,
  Table,
  TableContainer,
  Tbody,
  Td,
  Tr,
  Image,
  VStack,
} from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../redux/types';
import { selectPokemon } from '../../../redux/actions/actions';

const PokemonDetails: React.FC = ({}) => {
  const dispatch = useDispatch();

  const selectedPokemon = useSelector(
    (state: RootState) => state.pokemons.selectedPokemon
  );

  const closeDrawer = async (): Promise<void> => {
    await dispatch(selectPokemon(null) as any);
  };

  if (!selectedPokemon) return null;

  return (
    <Drawer isOpen={true} placement="right" onClose={closeDrawer}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerBody>
          <VStack>
            <Image
              w="50%"
              src={selectedPokemon.sprite}
              alt={selectedPokemon.name}
            />
            <Heading textTransform="capitalize">{`${
              selectedPokemon.name
            } #${selectedPokemon.id.toString().padStart(3, '0')}`}</Heading>
            <TableContainer w="100%">
              <Table size="sm" borderWidth="1px">
                <Tbody>
                  <Tr>
                    <Td>Type</Td>
                    <Td>{selectedPokemon.types.join(', ')}</Td>
                  </Tr>
                  {selectedPokemon.stats.map((stat) => (
                    <Tr key={stat.name}>
                      <Td>{stat.name}</Td>
                      <Td>{stat.number}</Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            </TableContainer>
          </VStack>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default PokemonDetails;
