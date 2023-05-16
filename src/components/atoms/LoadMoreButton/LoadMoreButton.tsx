import React from 'react';
import { ILoadMoreButtonPropTypes } from './LoadMoreButtonPropTypes';
import { Button } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/types';

const LoadMoreButton: React.FC<ILoadMoreButtonPropTypes> = ({ action }) => {
  const isLoading = useSelector((state: RootState) => state.pokemons.loading);

  return (
    <Button
      variant="solid"
      colorScheme="blue"
      isLoading={isLoading}
      onClick={action}
      w="100%"
    >
      Load More
    </Button>
  );
};

export default LoadMoreButton;
