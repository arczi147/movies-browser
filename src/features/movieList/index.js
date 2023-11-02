import Header from "../../common/Header";
import MovieTile from "../../common/MovieTile";
import { MoviesGrid } from "../../common/MovieTile/styled";
import { StyledHeader} from "./styled";

const Movies = () => (
  <>
    <StyledHeader>
      <Header text="Popular movies" />
    </StyledHeader>
    <MoviesGrid>
      <MovieTile />
      <MovieTile />
      <MovieTile />
      <MovieTile />
    </MoviesGrid>
  </>
);

export default Movies;