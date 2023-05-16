import { EType } from '../../redux/types';

export interface IPokemon {
  name: string;
  url: string;
}

export interface ITypes {
  slot: number;
  type: {
    name: EType;
    url: string;
  };
}

export interface IPokemonDetails {
  abilities: Array<any>;
  baseExperience: number;
  forms: Array<any>;
  game_indices: Array<any>;
  height: number;
  held_items: Array<any>;
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: Array<any>;
  name: string;
  order: number;
  past_types: Array<any>;
  species: any;
  sprites: {
    back_default: string | null;
    back_female: string | null;
    back_shiny: string | null;
    back_shiny_female: string | null;
    front_default: string;
    front_female: string | null;
    front_shiny: string | null;
    front_shiny_female: string | null;
  };
  stats: Array<any>;
  types: Array<ITypes>;
  weight: number;
}
