import Header from "../../common/Header";
import MovieTile from "../../common/MovieTile";
import { StyledHeader } from "./styled";

const Movies = () => (
  <>
    <StyledHeader>
      <Header text="Popular movies" />
    </StyledHeader>
    <MovieTile />
  </>
);

export default Movies;