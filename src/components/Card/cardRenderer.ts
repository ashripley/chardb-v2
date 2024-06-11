import { ReactNode } from 'react';
import {
  AttributeCardDefinition,
  CardDefinition,
  EvolutionChainDefinition,
  PokemonDefinition,
  Set,
} from './CardDefinition';

interface CardRendererOptions {
  cardDefinition: CardDefinition;
}

interface CardShellRendererOptions {
  type: string;
  children: ReactNode;
}

interface CardHeaderRendererOptions {
  name: string;
  type: PokemonDefinition['type'];
}

interface CardImageRendererOptions {
  imageUrl: PokemonDefinition['imageUrl'];
  evolutions: EvolutionChainDefinition;
}

interface CardBodyRendererOptions {
  type: PokemonDefinition['type'];
  set: AttributeCardDefinition['set'];
  cardType: AttributeCardDefinition['cardType'];
  condition: AttributeCardDefinition['condition'];
  quantity: CardDefinition['quantity'];
  isGraded: AttributeCardDefinition['isGraded'];
  grading: AttributeCardDefinition['grading'];
}

interface CardFooterRendererOptions {
  id: PokemonDefinition['id'];
  year: Set['year'];
  setNumber: CardDefinition['setNumber'];
  set: Set;
}

export type CardRenderer = (props: CardRendererOptions) => JSX.Element;
export type CardShellRenderer = (
  props: CardShellRendererOptions
) => JSX.Element;
export type CardHeaderRenderer = (
  props: CardHeaderRendererOptions
) => JSX.Element;
export type CardImageRenderer = (
  props: CardImageRendererOptions
) => JSX.Element;
export type CardBodyRenderer = (props: CardBodyRendererOptions) => JSX.Element;
export type CardFooterRenderer = (
  props: CardFooterRendererOptions
) => JSX.Element;
