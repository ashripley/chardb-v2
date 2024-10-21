import { theme } from '../../styles/theme';
import styled from 'styled-components';
import { pxToRem } from '../../utils';

interface Props {
  total: number;
  currentPage: number;
  handlePageChange: (page: number) => void;
}

const Container = styled.div`
  display: flex;
  padding: ${pxToRem('xl')};
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: auto;
  padding: ${pxToRem('lg')};
  border-radius: 15px;
  background-color: rgba(191, 191, 191, 0.3);
`;

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
    <Container>
      <PaginationWrapper>
        <BackgroundContainer>
          <Wrapper>
            <Pagination
              total={total}
              value={currentPage}
              onChange={onPageChange}
              radius='md'
              color='gray'
              size={'sm'}
              ff={theme.fonts.primary}
            />
          </Wrapper>
        </BackgroundContainer>
      </PaginationWrapper>
    </Container>
  );
};
