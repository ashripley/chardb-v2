export interface EvolutionDefinition {
  name: string;
  imageUrl: string;
}

export interface EvolutionChainDefinition {
  first: EvolutionDefinition;
  second?: EvolutionDefinition;
  third?: EvolutionDefinition;
}
