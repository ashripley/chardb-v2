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
} from "@tabler/icons-react"

export interface Theme {
  colours: {
    status: {
      error: string
      success: string
      info: string
    }
    fonts: {
      primary: string
    }
    bg: {
      bgGray0: string
      bgGray15: string
      bgGray25: string
      bgGray50: string
      bgGray75: string
      bgGray100: string
      bgDarkGray25: string
      bgDarkGray50: string
      bgDarkGray75: string
      bgDarkGray100: string
    }
    accents: {
      char: string
      bulb: string
      squir: string
    }
    types: {
      normal: string
      fire: string
      water: string
      grass: string
      electric: string
      ice: string
      fighting: string
      poison: string
      ground: string
      flying: string
      psychic: string
      bug: string
      rock: string
      ghost: string
      dragon: string
      dark: string
      steel: string
      fairy: string
    }
  }
  fonts: {
    primary: string
  }
  icons: {
    normal: (props: TablerIconsProps) => JSX.Element
    fire: (props: TablerIconsProps) => JSX.Element
    water: (props: TablerIconsProps) => JSX.Element
    grass: (props: TablerIconsProps) => JSX.Element
    electric: (props: TablerIconsProps) => JSX.Element
    ice: (props: TablerIconsProps) => JSX.Element
    fighting: (props: TablerIconsProps) => JSX.Element
    poison: (props: TablerIconsProps) => JSX.Element
    ground: (props: TablerIconsProps) => JSX.Element
    flying: (props: TablerIconsProps) => JSX.Element
    psychic: (props: TablerIconsProps) => JSX.Element
    bug: (props: TablerIconsProps) => JSX.Element
    rock: (props: TablerIconsProps) => JSX.Element
    ghost: (props: TablerIconsProps) => JSX.Element
    dragon: (props: TablerIconsProps) => JSX.Element
    dark: (props: TablerIconsProps) => JSX.Element
    steel: (props: TablerIconsProps) => JSX.Element
    fairy: (props: TablerIconsProps) => JSX.Element
  }
}

export const theme: Theme = {
  colours: {
    status: {
      error: "rgb(226 54 54)",
      success: "rgb(130 221 85)",
      info: "rgb(74 144 226)",
    },
    fonts: {
      primary: "#595959",
    },
    bg: {
      bgGray0: "rgba(191, 191, 191, 0)",
      bgGray15: "rgba(191, 191, 191, 0.15)",
      bgGray25: "rgba(191, 191, 191, 0.25)",
      bgGray50: "rgba(191, 191, 191, 0.50)",
      bgGray75: "rgba(191, 191, 191, 0.75)",
      bgGray100: "rgba(191, 191, 191)",
      bgDarkGray25: "rgba(89, 89, 89, 0.25)",
      bgDarkGray50: "rgba(89, 89, 89, 0.50)",
      bgDarkGray75: "rgba(89, 89, 89, 0.75)",
      bgDarkGray100: "rgba(89, 89, 89)",
    },
    accents: {
      char: "#ff8c00",
      bulb: "#78c84f",
      squir: "#62bbe0",
    },
    types: {
      normal: "#a8a878",
      fire: "#f08030",
      water: "#6790f0",
      grass: "#78c84f",
      electric: "#f9cf30",
      ice: "#98d8d8",
      fighting: "#c03028",
      poison: "#9f40a0",
      ground: "#e0c068",
      flying: "#a890f0",
      psychic: "#f85888",
      bug: "#a8b720",
      rock: "#b8a039",
      ghost: "#705898",
      dragon: "#7038f8",
      dark: "#705848",
      steel: "#b8b8d0",
      fairy: "#f0b6bc",
    },
  },
  fonts: {
    primary: "SF Pro",
  },
  icons: {
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
  },
}
