import { Dispatch, SetStateAction } from 'react';
import { EType } from '../../../redux/types';

export interface IFilterButtonsPropTypes {
  handleChange: Dispatch<SetStateAction<EType | undefined>>;
  value: EType | undefined;
}
