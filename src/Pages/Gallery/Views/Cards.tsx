import { useSelector } from 'react-redux';
import { RootStore } from '../../../redux/store';
import { Flex, Loader, Space } from '@mantine/core';
import { useEffect, useState } from 'react';
import { theme } from '../../../styles/theme';
import { CardDefinition } from '../../../api/card';
import { EmptyState } from '../../../components/EmptyState';
import { CustomPagination } from '../../../components/Pagination';
import { DisplayCard } from '../../../components/Card';
import { Tile } from '../../../components/Tile';

export const Cards = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [filteredCards, setFilteredCards] = useState<CardDefinition[]>([]);

  const { cards, galleryView, searchTerm } = useSelector(
    (state: RootStore) => state.root
  );

  useEffect(() => {
    if (searchTerm === '' && cards.length > 0) {
      setIsLoading(false);
      setFilteredCards(cards);
    }
  }, [cards, searchTerm]);

  const cardsPerPage = 50;
  const totalCards = filteredCards.length;
  const totalPages = Math.ceil(totalCards / cardsPerPage);

  const startIndex = (currentPage - 1) * cardsPerPage;
  const endIndex = Math.min(startIndex + cardsPerPage, totalCards);

  useEffect(() => {
    if (searchTerm !== '' && cards.length > 0) {
      setIsLoading(false);
      const filteredCards: CardDefinition[] = cards.filter((card) =>
        card.pokemonData.name.toLowerCase().includes(searchTerm)
      );

      setFilteredCards(filteredCards);
    } else setFilteredCards(cards);
  }, [searchTerm, cards]);

  const handlePageChange = (pageNumber: number) => setCurrentPage(pageNumber);

  const CardsMap: Record<string, any> = {
    card: DisplayCard,
    tile: Tile,
  };

  const CardsView = CardsMap[galleryView];

  return (
    <>
      {isLoading ? (
        <Flex justify='center' align={'center'} h={'65vh'}>
          <Loader color={theme.colors.accents.char} size='lg' type='dots' />
        </Flex>
      ) : filteredCards.length ? (
        <>
          <Flex justify='space-evenly' wrap='wrap' gap={20}>
            {filteredCards
              .slice(startIndex, endIndex)
              .map((card: CardDefinition, index: number) => {
                return <CardsView key={index} card={card} />;
              })}
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
