import { TypesDefinition } from '../../styles/theme/colors';

export interface PokemonDefinition {
  name: string;
  id: number;
  evolutions: EvolutionsDefinition;
  type: keyof TypesDefinition;
  imageUrl: string;
  meta?: unknown;
}

export interface EvolutionDefinition {
  name: string;
  imageUrl: string;
}

export interface EvolutionsDefinition {
  first: EvolutionDefinition;
  second?: EvolutionDefinition;
  third?: EvolutionDefinition;
}
