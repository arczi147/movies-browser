import MovieBaner from "./MovieBaner";
import MovieTileDetails from "./MovieTileDetails";
import { GlobalWrapper } from "../../common/GlobalWrapper/styled";
import { MovieWrapper, GridWrapper, Title } from "./styled";
import { usePopularMovie } from "./usePopularMovie";
import Loading from "../../common/Loading";
import MovieCastTile from "./MovieCastTile";
import MovieCrewTile from "./MovieCrewTile";

const Movie = () => {

    const { loading } = usePopularMovie();

    if (loading) {
        return <Loading />;
    }

    return (
        <MovieWrapper>
            <MovieBaner />
            <GlobalWrapper>
                <MovieTileDetails />
                <Title>Cast</Title>
            </GlobalWrapper>
            <GridWrapper>
                <MovieCastTile />
            </GridWrapper>
            <GlobalWrapper>
                <Title>Crew</Title>
            </GlobalWrapper>
            <GridWrapper>
                <MovieCrewTile />
            </GridWrapper>
        </MovieWrapper>
    )
};

export default Movie;