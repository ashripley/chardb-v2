interface AttributeCardDefinition {}

interface PokemonDefinition {}

export interface CardDefinition {
  cardId: number
  quantity: number
  setNumber: number
  attributes: AttributeCardDefinition
  pokemonData: PokemonDefinition
  meta?: {
    isGraded: boolean
    grading?: string
  }
}
