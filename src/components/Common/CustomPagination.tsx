import { Container, Flex, Pagination } from '@mantine/core';
import { theme } from '../../theme/theme';
import styled from 'styled-components';

interface Props {
  total: number;
  currentPage: number;
  handlePageChange: (page: number) => void;
}

const PaginationWrapper = styled.div`
  position: fixed;
  bottom: 50px;
  left: 50%;
  transform: translateX(-50%);
  margin: auto;
`;

const BackgroundContainer = styled.div`
  backdrop-filter: blur(15px);
  background-color: rgba(191, 191, 191, 0.2);
  border-radius: 15px;
`;

export const CustomPagination = ({
  total,
  currentPage,
  handlePageChange,
}: Props) => {
  const onPageChange = (pageNumber: number) => {
    handlePageChange(pageNumber);
  };

  return (
    <Container p={'xl'}>
      <PaginationWrapper>
        <BackgroundContainer>
          <Flex
            justify={'center'}
            m={'auto'}
            p={'md'}
            style={{
              borderRadius: 15,
              backgroundColor: 'rgba(191, 191, 191, 0.3)',
            }}
          >
            <Pagination
              total={total}
              value={currentPage}
              onChange={onPageChange}
              radius='md'
              color='gray'
              size={'sm'}
              ff={theme.fonts.primary}
            />
          </Flex>
        </BackgroundContainer>
      </PaginationWrapper>
    </Container>
  );
};
