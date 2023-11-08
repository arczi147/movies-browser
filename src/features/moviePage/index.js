import MovieBaner from "./MovieBaner";
import MovieTileDetails from "./MovieTileDetails";
import { GlobalWrapper } from "../../common/GlobalWrapper/styled";
import { Title } from "./styled";

const PopularMovies = () => (
    <>
        <MovieBaner />
        <GlobalWrapper>
            <MovieTileDetails />
            <Title>Cast</Title>
            <Title>Crew</Title>
        </GlobalWrapper>
    </>
)

export default PopularMovies;