import {
  StyledNavigation,
  List,
  StyledHeader,
  Logo,
  Caption,
  PageLink,
  SearchBar,
} from "./styled";

const Navigation = () => (
  <StyledNavigation>
    <StyledHeader>
      <Logo />
      <Caption>Movies Browser</Caption>
    </StyledHeader>
    <List>
      <li>
        <PageLink>Movies</PageLink>
      </li>
      <li>
        <PageLink>People</PageLink>
      </li>
    </List>
    <SearchBar />
  </StyledNavigation>
);

export default Navigation