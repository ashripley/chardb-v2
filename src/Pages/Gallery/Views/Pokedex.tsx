import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { RootStore } from '../../../redux/store';
import { PokemonDefinition } from '../../../api/pokemon';
import { CustomTile } from '../../../components/Tile';
import { CustomPagination } from '../../../components/Pagination/Pagination';
import { EmptyState } from '../../../components/EmptyState';

export const Pokedex = () => {
  const { pokemon, searchTerm } = useSelector((state: RootStore) => state.root);

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [filteredPokedex, setFilteredPokedex] = useState<PokemonDefinition[]>(
    []
  );

  const handlePageChange = (pageNumber: number) => setCurrentPage(pageNumber);

  const sortedPokedexById = Object.fromEntries(
    Object.entries(pokemon).sort(
      ([, { id: idA }], [, { id: idB }]) => idA - idB
    )
  );

  const pokedex = Object.values(sortedPokedexById);

  const cardsPerPage = 50;
  const totalCards = filteredPokedex.length;
  const totalPages = Math.ceil(totalCards / cardsPerPage);

  const startIndex = (currentPage - 1) * cardsPerPage;
  const endIndex = Math.min(startIndex + cardsPerPage, totalCards);

  useEffect(() => {
    if (searchTerm !== '') {
      const filteredPokedexCards = pokedex.filter((card) =>
        card.name.toLowerCase().includes(searchTerm)
      );

      setFilteredPokedex(filteredPokedexCards);
    } else setFilteredPokedex(pokedex);
  }, [searchTerm]);

  return (
    <>
      {filteredPokedex.length ? (
        <>
          <Flex justify='space-evenly' wrap='wrap' gap={20}>
            {filteredPokedex
              .slice(startIndex, endIndex)
              .map((pokemon: PokemonDefinition, index: number) => (
                <CustomTile pokemon={pokemon} key={index} />
              ))}
          </Flex>
          <Space h={25} />
          <CustomPagination
            total={totalPages}
            currentPage={currentPage}
            handlePageChange={handlePageChange}
          />
        </>
      ) : (
        <EmptyState />
      )}
    </>
  );
};
