import { FontsDefinition } from '../fonts';

interface BgDefinition {
  bgGray0: string;
  bgGray15: string;
  bgGray25: string;
  bgGray50: string;
  bgGray75: string;
  bgGray100: string;
  bgDarkGray25: string;
  bgDarkGray50: string;
  bgDarkGray75: string;
  bgDarkGray100: string;
}

interface AccentsDefinition {
  char: string;
  bulb: string;
  squir: string;
}

export interface TypesDefinition {
  normal: string;
  fire: string;
  water: string;
  grass: string;
  electric: string;
  ice: string;
  fighting: string;
  poison: string;
  ground: string;
  flying: string;
  psychic: string;
  bug: string;
  rock: string;
  ghost: string;
  dragon: string;
  dark: string;
  steel: string;
  fairy: string;
}

interface StatusDefinition {
  error: string;
  success: string;
  info: string;
}

export interface ColorsDefinition {
  status: StatusDefinition;
  fonts: FontsDefinition;
  bg: BgDefinition;
  accents: AccentsDefinition;
  types: TypesDefinition;
}
