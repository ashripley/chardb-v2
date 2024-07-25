import {
  IconDroplet,
  IconFlame,
  IconCircle,
  IconLeaf,
  IconBolt,
  IconSnowflake,
  IconHandGrab,
  IconHexagons,
  IconWorldLatitude,
  IconFeather,
  IconBug,
  IconHexagon,
  IconGhost2,
  IconBat,
  IconComet,
  IconMoonStars,
  IconSparkles,
  IconEye,
  TablerIconsProps,
  IconPlus,
  IconReload,
  IconDatabase,
  IconChartBubble,
  IconGridDots,
  IconLayoutGrid,
  IconSearch,
} from '@tabler/icons-react';

interface IconsDefinition {
  normal: (props: TablerIconsProps) => JSX.Element;
  fire: (props: TablerIconsProps) => JSX.Element;
  water: (props: TablerIconsProps) => JSX.Element;
  grass: (props: TablerIconsProps) => JSX.Element;
  electric: (props: TablerIconsProps) => JSX.Element;
  ice: (props: TablerIconsProps) => JSX.Element;
  fighting: (props: TablerIconsProps) => JSX.Element;
  poison: (props: TablerIconsProps) => JSX.Element;
  ground: (props: TablerIconsProps) => JSX.Element;
  flying: (props: TablerIconsProps) => JSX.Element;
  psychic: (props: TablerIconsProps) => JSX.Element;
  bug: (props: TablerIconsProps) => JSX.Element;
  rock: (props: TablerIconsProps) => JSX.Element;
  ghost: (props: TablerIconsProps) => JSX.Element;
  dragon: (props: TablerIconsProps) => JSX.Element;
  dark: (props: TablerIconsProps) => JSX.Element;
  steel: (props: TablerIconsProps) => JSX.Element;
  fairy: (props: TablerIconsProps) => JSX.Element;
  plus: (props: TablerIconsProps) => JSX.Element;
  reload: (props: TablerIconsProps) => JSX.Element;
  database: (props: TablerIconsProps) => JSX.Element;
  evolutions: (props: TablerIconsProps) => JSX.Element;
  tile: (props: TablerIconsProps) => JSX.Element;
  grid: (props: TablerIconsProps) => JSX.Element;
  search: (props: TablerIconsProps) => JSX.Element;
}

const icons: IconsDefinition = {
  normal: IconCircle,
  fire: IconFlame,
  water: IconDroplet,
  grass: IconLeaf,
  electric: IconBolt,
  ice: IconSnowflake,
  fighting: IconHandGrab,
  poison: IconHexagons,
  ground: IconWorldLatitude,
  flying: IconFeather,
  psychic: IconEye,
  bug: IconBug,
  rock: IconHexagon,
  ghost: IconGhost2,
  dragon: IconBat,
  dark: IconMoonStars,
  steel: IconComet,
  fairy: IconSparkles,
  plus: IconPlus,
  reload: IconReload,
  database: IconDatabase,
  evolutions: IconChartBubble,
  tile: IconGridDots,
  grid: IconLayoutGrid,
  search: IconSearch,
};
export default icons;
