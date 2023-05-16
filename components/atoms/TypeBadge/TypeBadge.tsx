import React from 'react';
import { ITypeBadgePropTypes } from './TypeBadgePropTypes';
import { Badge } from '@chakra-ui/react';
import { EType } from '../../../redux/types';

const color = {
  [EType.BUG]: 'orange',
  [EType.NORMAL]: 'gray',
  [EType.FIRE]: 'red',
  [EType.FLYING]: 'teal',
  [EType.POISON]: 'purple',
  [EType.GRASS]: 'green',
  [EType.WATER]: 'blue',
  [EType.ELECTRIC]: 'yellow',
  [EType.FAIRY]: 'pink',
  [EType.GROUND]: 'orange',
  [EType.DARK]: 'orange',
  [EType.DRAGON]: 'red',
  [EType.FIGHTING]: 'purple',
  [EType.GHOST]: 'gray',
  [EType.ICE]: 'teal',
  [EType.PSYCHIC]: 'cyan',
  [EType.ROCK]: 'gray',
  [EType.STEEL]: 'blue',
};

const TypeBadge: React.FC<ITypeBadgePropTypes> = ({ type }) => (
  <Badge colorScheme={color[type]}>{type}</Badge>
);

export default TypeBadge;
