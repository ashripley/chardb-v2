export const pokemonDocumentId = '3VrSEef3dfMKatd1eM0m';
export type GalleryViewType = 'tile' | 'card';
export type GalleryApp = 'cards' | 'pokedex';
export type DashboardApp = 'analytics';
export type StudioViewType = 'create' | 'update' | 'db';
export type AppType = 'Studio' | 'Gallery' | 'Home' | 'Dashboard';
export type DBType = 'set' | 'cardType' | 'type' | 'condition' | 'pokemon';
export type FormType =
  | 'set'
  | 'cardType'
  | 'type'
  | 'condition'
  | 'newCard'
  | 'exisitingCard'
  | 'rarity';

export const isMobile = window.matchMedia(
  'only screen and (max-width: 760px)'
).matches;
