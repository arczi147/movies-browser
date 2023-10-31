import {
  StyledNavigation,
  Header,
  Logo,
  Caption,
  List,
  PageLink,
} from "./styled";

const Navigation = () => (
  <StyledNavigation>
    <Header>
      <Logo />
      <Caption>Movies Browser</Caption>
    </Header>
    <List>
      <li>
        <PageLink>Movies</PageLink>
      </li>
      <li>
        <PageLink>People</PageLink>
      </li>
    </List>
  </StyledNavigation>
);

export default Navigation;