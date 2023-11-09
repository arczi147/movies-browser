import MovieBaner from "./MovieBaner";
import MovieTileDetails from "./MovieTileDetails";
import { GlobalWrapper } from "../../common/GlobalWrapper/styled";
import { Wrapper, Title } from "./styled";
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
                </GlobalWrapper>
                <Wrapper>
                    <MovieCastTile />
                </Wrapper>
                <GlobalWrapper>
                    <Title>Crew</Title>
                </GlobalWrapper>
                <Wrapper>
                    <MovieCrewTile />
                </Wrapper>
            </>
        )
    )
}

export default Movie;