import Header from "../../common/Header";
import MovieTile from "../../common/MovieTile";
import { MoviesGrid } from "../../common/MovieTile/styled";
import { GlobalWrapper } from "../../common/GlobalWrapper/styled";
import { StyledHeader } from "./styled";

const Movies = () => (
  <GlobalWrapper>
    <StyledHeader>
      <Header text="Popular movies" />
    </StyledHeader>
    <MoviesGrid>
      <MovieTile />
      <MovieTile />
      <MovieTile />
      <MovieTile />
    </MoviesGrid>
  </GlobalWrapper>
);

export default Movies;