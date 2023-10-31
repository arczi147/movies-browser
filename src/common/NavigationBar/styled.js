import styled from "styled-components";

export const StyledNavigationBar = styled.nav`
  background: ${({ theme }) => theme.color.woodsmoke};
`;

export const Wrapper = styled.div`
  min-height: 94px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  max-width: 1368px;
  margin: auto;
  padding: 0 52px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: flex;
    flex-direction: column;
    padding: 0 16px;
  };
`;