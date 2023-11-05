import {
  StyledSearchBar, 
  Input,
  Icon,
} from "./styled";

const SearchBar = () => (
  <StyledSearchBar>
    <Icon />
    <Input placeholder="Search for movies..." />
  </StyledSearchBar>
);

export default SearchBar;