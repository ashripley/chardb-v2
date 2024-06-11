import { EvolutionChainDefinition } from './EvolutionDefinition';

export interface PokemonDefinition {
  name: string;
  id: number;
  evolutionChain: EvolutionChainDefinition;
  type: string;
  imageUrl: string;
  meta?: unknown;
}
