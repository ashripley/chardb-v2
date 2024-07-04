import axios from 'axios';
import {
  EvolutionsDefinition,
  PokemonDefinition,
  addBulkPokemonMutation,
  addPokemonMutation,
} from '../api/pokemon';

export const addBulkPokemon = async () => {
  const hyphenatedPokemonNames = [
    'deoxys-normal',
    'shaymin-land',
    'giratina-altered',
    'wormadam-plant',
  ];

  try {
    const response = await axios.get(
      'https://pokeapi.co/api/v2/pokemon?limit=151'
    );
    const { results } = response.data;
    const pokemonDetailsPromises = results.map((result: any) =>
      axios.get(result.url)
    );

    const pokemonDetailsResponses = await Promise.all(pokemonDetailsPromises);

    const allPokemon = pokemonDetailsResponses.map((response: any) => {
      const { data } = response;
      const { name } = data;

      if (hyphenatedPokemonNames.includes(data.name)) return {};

      return {
        name,
        image: `https://img.pokemondb.net/sprites/home/normal/${name}.png`,
      };
    });

    for (const pokemon of allPokemon) {
      if (!pokemon.name) continue;

      // if (
      //   currentPokemonDb &&
      //   Object.keys(currentPokemonDb).includes(pokemon.name)
      // )
      //   continue

      // fetch pokemon blob from pokeapi
      const data = await fetchPokemon(pokemon.name);

      // fetch evolution chain url from pokeapi
      const chainUrl = await fetchEvolutionUrl(pokemon.name);

      // fetch evolution chain from pokeapi
      const chain = await fetchEvolutions(chainUrl.url);

      const firstEvolution = chain.chain.species;
      const secondEvolution = chain.chain.evolves_to?.[0]?.species;
      const thirdEvolution =
        chain.chain.evolves_to?.[0]?.evolves_to?.[0]?.species;

      const evolutions: EvolutionsDefinition = {
        first: {
          name: firstEvolution.name ?? '',
          imageUrl: firstEvolution.name
            ? `https://img.pokemondb.net/sprites/home/normal/${firstEvolution.name}.png`
            : '',
        },
        second: {
          name: secondEvolution?.name ?? '',
          imageUrl: secondEvolution?.name
            ? `https://img.pokemondb.net/sprites/home/normal/${secondEvolution.name}.png`
            : '',
        },
        third: {
          name: thirdEvolution?.name ?? '',
          imageUrl: thirdEvolution?.name
            ? `https://img.pokemondb.net/sprites/home/normal/${thirdEvolution.name}.png`
            : '',
        },
      };

      // pokemon obj to write
      const pokemonToAdd: PokemonDefinition = {
        name: data.name,
        id: data.id,
        evolutions,
        type: data.types[0]?.type.name,
        imageUrl: `https://img.pokemondb.net/sprites/home/normal/${data.name}.png`,
      };

      // write to db
      await addBulkPokemonMutation(pokemonToAdd);
    }
  } catch (error) {
    throw new Error(`Error fetching pokemon data: ${error}`);
  }
};

export const addPokemon = async (pokemon: PokemonDefinition) => {
  const hyphenatedPokemonNames = [
    'deoxys-normal',
    'shaymin-land',
    'giratina-altered',
    'wormadam-plant',
  ];

  const { name } = pokemon;
  // check if pokemon already exists in db
  if (pokemon && Object.keys(pokemon).includes(name)) return;

  // check if pokemon name is in hyphenated array
  if (hyphenatedPokemonNames.includes(name)) return;

  try {
    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${name}`
    );
    const { data } = response;

    // fetch evolution chain url from pokeapi
    const chainUrl = await fetchEvolutionUrl(data.name);

    // fetch evolution chain from pokeapi
    const chain = await fetchEvolutions(chainUrl.url);

    const firstEvolution = chain.chain.species;
    const secondEvolution = chain.chain.evolves_to?.[0]?.species;
    const thirdEvolution =
      chain.chain.evolves_to?.[0]?.evolves_to?.[0]?.species;

    const evolutions: EvolutionsDefinition = {
      first: {
        name: firstEvolution.name ?? '',
        imageUrl: firstEvolution.name
          ? `https://img.pokemondb.net/sprites/home/normal/${firstEvolution.name}.png`
          : '',
      },
      second: {
        name: secondEvolution?.name ?? '',
        imageUrl: secondEvolution?.name
          ? `https://img.pokemondb.net/sprites/home/normal/${secondEvolution.name}.png`
          : '',
      },
      third: {
        name: thirdEvolution?.name ?? '',
        imageUrl: thirdEvolution?.name
          ? `https://img.pokemondb.net/sprites/home/normal/${thirdEvolution.name}.png`
          : '',
      },
    };

    // pokemon obj to write
    const pokemonToAdd: PokemonDefinition = {
      name: data.name,
      id: data.id,
      evolutions,
      type: data.types[0]?.type.name,
      imageUrl:
        'https://img.pokemondb.net/sprites/home/normal/${data.name}.png',
    };

    // write to db
    await addPokemonMutation(pokemonToAdd);
  } catch (error) {
    throw new Error(`Error fetching pokemon data: ${error}`);
  }
};

const fetchPokemon = async (name: string) => {
  const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
  return response.data;
};

const fetchEvolutionUrl = async (name: string) => {
  const response = await axios.get(
    `https://pokeapi.co/api/v2/pokemon-species/${name}`
  );
  const evolutionUrl = await response.data.evolution_chain;
  return evolutionUrl;
};

const fetchEvolutions = async (url: string) => {
  const response = await axios.get(url);
  return response.data;
};
