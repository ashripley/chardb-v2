import { ReactNode } from 'react';
import { AttributeCardDefinition, CardDefinition } from './CardDefinition';
import {
  EvolutionChainDefinition,
  PokemonDefinition,
  SetAttributeDefinition,
} from '../../definitions';

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
  setNumber: CardDefinition['setNumber'];
  set: SetAttributeDefinition;
}

export type CardRenderer = (props: CardRendererOptions) => JSX.Element;
export type CardShellRenderer = (props: CardShellRendererOptions) => ReactNode;
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
