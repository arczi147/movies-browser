import MovieBaner from "./MovieBaner";
import MovieTileDetails from "./MovieTileDetails";
import { Title } from "./styled";

const Movie = () => (
    <>
        <MovieBaner />
        <MovieTileDetails />
        <Title>Cast</Title>
        <Title>Crew</Title>
    </>
)

export default Movie;