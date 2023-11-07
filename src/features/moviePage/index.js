import MovieBaner from "./MovieBaner";
import MovieTileDetails from "./MovieTileDetails";
import { GlobalWrapper } from "../../common/GlobalWrapper/styled";
import { Title } from "./styled";
import { usePopularMovie } from "./usePopularMovie";
import Loading from "../../common/Loading";

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
                    <Title>Crew</Title>
                </GlobalWrapper>
            </>
        )
    )
}

export default Movie;