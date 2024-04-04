import axios from "axios"
import { v4 as uuidv4 } from "uuid"
import { addBulkPokemonMutation, addPokemonMutation } from "../api/pokemon"

export const addBulkPokemon = async () => {
  const uuid = uuidv4()

  const hyphenatedPokemonNames = [
    "deoxys-normal",
    "shaymin-land",
    "giratina-altered",
    "wormadam-plant",
  ]

  try {
    const response = await axios.get(
      "https://pokeapi.co/api/v2/pokemon?limit=151"
    )
    const { results } = response.data
    const pokemonDetailsPromises = results.map((result: any) =>
      axios.get(result.url)
    )

    const pokemonDetailsResponses = await Promise.all(pokemonDetailsPromises)

    const allPokemon = pokemonDetailsResponses.map((response: any) => {
      const { data } = response
      const { name } = data

      if (hyphenatedPokemonNames.includes(data.name)) return {}

      return {
        name,
        image: `https://img.pokemondb.net/sprites/home/normal/${name}.png`,
      }
    })

    for (const pokemon of allPokemon) {
      if (!pokemon.name) continue

      // if (
      //   currentPokemonDb &&
      //   Object.keys(currentPokemonDb).includes(pokemon.name)
      // )
      //   continue

      // fetch pokemon blob from pokeapi
      const data = await fetchPokemon(pokemon.name)

      // fetch evolution chain url from pokeapi
      const chainUrl = await fetchEvolutionChainUrl(pokemon.name)

      // fetch evolution chain from pokeapi
      const chain = await fetchEvolutionChain(chainUrl.url)

      const firstEvolution = chain.chain.species
      const secondEvolution = chain.chain.evolves_to?.[0]?.species
      const thirdEvolution =
        chain.chain.evolves_to?.[0]?.evolves_to?.[0]?.species

      const evolutionChainObj = {
        first: {
          name: firstEvolution.name ?? "",
          image: firstEvolution.name
            ? `https://img.pokemondb.net/sprites/home/normal/${firstEvolution.name}.png`
            : "",
        },
        second: {
          name: secondEvolution?.name ?? "",
          image: secondEvolution?.name
            ? `https://img.pokemondb.net/sprites/home/normal/${secondEvolution.name}.png`
            : "",
        },
        third: {
          name: thirdEvolution?.name ?? "",
          image: thirdEvolution?.name
            ? `https://img.pokemondb.net/sprites/home/normal/${thirdEvolution.name}.png`
            : "",
        },
      }

      // pokemon obj to write
      const pokemonToAdd = {
        pokemonId: uuid,
        name: data.name,
        id: data.id,
        type: data.types[0]?.type.name,
        image: `https://img.pokemondb.net/sprites/home/normal/${data.name}.png`,
        evolutions: { ...evolutionChainObj },
      }

      // write to db
      await addBulkPokemonMutation(pokemonToAdd, pokemon.name)
    }
  } catch (error) {
    console.error("Error fetching pokemon data:", error)
  }
}

export const addPokemon = async (
  name: string,
  pokemonData: Record<string, any>
) => {
  const uuid = uuidv4()

  const hyphenatedPokemonNames = [
    "deoxys-normal",
    "shaymin-land",
    "giratina-altered",
    "wormadam-plant",
  ]

  // check if pokemon already exists in db
  if (pokemonData && Object.keys(pokemonData).includes(name)) return

  // check if pokemon name is in hyphenated array
  if (hyphenatedPokemonNames.includes(name)) return

  try {
    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${name}`
    )
    const { data } = response

    // fetch evolution chain url from pokeapi
    const chainUrl = await fetchEvolutionChainUrl(data.name)

    // fetch evolution chain from pokeapi
    const chain = await fetchEvolutionChain(chainUrl.url)

    const firstEvolution = chain.chain.species
    const secondEvolution = chain.chain.evolves_to?.[0]?.species
    const thirdEvolution = chain.chain.evolves_to?.[0]?.evolves_to?.[0]?.species

    const evolutionChainObj = {
      first: {
        name: firstEvolution.name ?? "",
        image: firstEvolution.name
          ? `https://img.pokemondb.net/sprites/home/normal/${firstEvolution.name}.png`
          : "",
      },
      second: {
        name: secondEvolution?.name ?? "",
        image: secondEvolution?.name
          ? `https://img.pokemondb.net/sprites/home/normal/${secondEvolution.name}.png`
          : "",
      },
      third: {
        name: thirdEvolution?.name ?? "",
        image: thirdEvolution?.name
          ? `https://img.pokemondb.net/sprites/home/normal/${thirdEvolution.name}.png`
          : "",
      },
    }

    // pokemon obj to write
    const pokemon = {
      pokemonId: uuid,
      name: data.name,
      id: data.id,
      type: data.types[0]?.type.name,
      image: `https://img.pokemondb.net/sprites/home/normal/${data.name}.png`,
      evolutions: { ...evolutionChainObj },
    }

    // write to db
    await addPokemonMutation(pokemon)
  } catch (error) {
    console.error("Error fetching pokemon data:", error)
  }
}

const fetchPokemon = async (name: string) => {
  const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
  return response.data
}

const fetchEvolutionChainUrl = async (name: string) => {
  const response = await axios.get(
    `https://pokeapi.co/api/v2/pokemon-species/${name}`
  )
  const chainUrl = await response.data.evolution_chain
  return chainUrl
}

const fetchEvolutionChain = async (url: string) => {
  const response = await axios.get(url)
  return response.data
}
