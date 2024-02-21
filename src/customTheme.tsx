// Pokemon Type Colours
interface CustomTheme {
  colours: {
    font: {
      primary: string
    }
    bg: {
      bgGray25: string
      bgGray50: string
      bgGray75: string
      bgGray100: string
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
  font: {
    primary: string
  }
}

export const customTheme: CustomTheme = {
  colours: {
    font: {
      primary: "#595959",
    },
    bg: {
      bgGray25: "rgba(191, 191, 191, 0.25)",
      bgGray50: "rgba(191, 191, 191, 0.50)",
      bgGray75: "rgba(191, 191, 191, 0.75)",
      bgGray100: "rgba(191, 191, 191)",
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
  font: {
    primary:
      "ui-rounded, 'Hiragino Maru Gothic ProN', Quicksand, Comfortaa, Manjari, 'Arial Rounded MT', 'Arial Rounded MT Bold', Calibri, source-sans-pro, sans-serif",
  },
}
