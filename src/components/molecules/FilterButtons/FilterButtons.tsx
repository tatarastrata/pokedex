import React from 'react';
import { IFilterButtonsPropTypes } from './FilterButtonsPropTypes';
import { HStack, IconButton, Radio } from '@chakra-ui/react';
import { RepeatIcon } from '@chakra-ui/icons';
import { EType } from '../../../redux/types';

const FilterButtons: React.FC<IFilterButtonsPropTypes> = ({
  handleChange,
  value,
}) => {
  return (
    <HStack wrap="wrap" w="75%" justify={'center'}>
      {Object.values(EType).map((pokemonType: EType) => (
        <Radio
          name="pokemonType"
          key={pokemonType}
          value={pokemonType}
          isChecked={pokemonType === value}
          onChange={() => handleChange(pokemonType)}
        >
          {pokemonType}
        </Radio>
      ))}
      <IconButton
        onClick={() => handleChange(undefined)}
        aria-label="Reset filters"
        icon={<RepeatIcon />}
        isDisabled={value === undefined}
      />
    </HStack>
  );
};

export default FilterButtons;
