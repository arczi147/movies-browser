import { Wrapper, Container, Poster } from "./styled";
import poster from "../../images/example-poster.png"

const MovieTile = () => (
  <Wrapper>
    <Container>
      <Poster src={poster} alt="Poster" />
    </Container>
  </Wrapper>
);

export default MovieTile;