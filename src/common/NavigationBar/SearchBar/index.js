import {
  StyledSearchBar, 
  Input,
  Icon,
} from "./styled";

const SearchBar = () => (
  <StyledSearchBar>
    <Icon />
    <Input placeholder="Serarch for movies..." />
  </StyledSearchBar>
);

export default SearchBar;