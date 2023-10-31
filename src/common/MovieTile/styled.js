import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-gap: 24px;
  grid-template-columns: auto auto auto auto;
`;

export const Container = styled.div`
  width: 324px;
  height: 650px;
  border-radius: 5px;
  background: ${({ theme }) => theme.color.white};
  box-shadow: 0px 4px 12px 0px rgba(186, 199, 213, 0.50);
`;

export const Poster = styled.img`
  border-radius: 5px;
  padding: 16px;
`;