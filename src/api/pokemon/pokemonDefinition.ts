import { Types } from '../../theme/theme';

export interface PokemonDefinition {
  name: string;
  id: number;
  evolutions: EvolutionsDefinition;
  type: keyof Types;
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
