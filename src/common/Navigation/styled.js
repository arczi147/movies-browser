import styled from "styled-components";
import { ReactComponent as LogoIcon } from "../../images/logo.svg";

export const StyledNavigation = styled.nav`
  background: ${({ theme }) => theme.color.woodsmoke};
  display: flex;
  margin: 0;
  height: 94px;
`;

export const List = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin-top: 23px;
`;

export const StyledHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;
  padding: 27px 80px 27px 10%;
`;

export const Logo = styled(LogoIcon)`
`;

export const Caption = styled.h1`
  color: ${({ theme }) => theme.color.white};
  font-size: 24px;
  font-weight: 500;
`;

export const PageLink = styled.div`
  color: ${({ theme }) => theme.color.white};
  font-weight: 600;
  font-size: 14px;
  text-transform: uppercase;
  padding: 14px 24px;

  &:active {
    border: 1px solid ${({ theme }) => theme.color.white};
    border-radius: 24px;
  }
`;

export const SearchBar = styled.div`
`;