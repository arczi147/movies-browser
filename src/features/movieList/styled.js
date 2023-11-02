import styled from "styled-components";

export const StyledHeader = styled.div`
  margin: 56px auto 24px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin: 24px auto 12px;
  };
`;

export const MoviesGrid = styled.div`
  display: grid;
  grid-gap: 24px;
  grid-template-columns: repeat(4, 1fr);

  @media (max-width: ${({ theme }) => theme.breakpoints.narrow}) {
    grid-template-columns: repeat(3, 1fr);
  };

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: repeat(2, 1fr);
  };

  @media (max-width: ${({ theme }) => theme.breakpoints.smallMobile}) {
    display: flex;
    flex-direction: column;
    gap: 16px;
  };
`;