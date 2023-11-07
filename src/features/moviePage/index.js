import MovieBaner from "./MovieBaner";
import MovieTileDetails from "./MovieTileDetails";
import { GlobalWrapper } from "../../common/GlobalWrapper/styled";
import { Title } from "./styled";
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
        (
            <>
                <MovieBaner />
                <GlobalWrapper>
                    <MovieTileDetails />
                    <Title>Cast</Title>
                    <MovieCastTile />
                    <Title>Crew</Title>
                    <MovieCrewTile/>
                </GlobalWrapper>
            </>
        )
    )
}

export default Movie;