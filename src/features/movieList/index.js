import Header from "../../common/Header";
import MovieTile from "../../common/MovieTile";
import { MoviesGrid } from "../../common/MovieTile/styled";
import { GlobalWrapper } from "../../common/GlobalWrapper/styled";
import { StyledHeader } from "./styled";
import { usePopularMovies } from "./usePopularMovies";
import { useGenres } from "../../common/useGenres";
import Loading from "./Loading";

const Movies = () => {
  const { popularMovies, loading, error } = usePopularMovies();
  const { genres } = useGenres();
  const movies = popularMovies.results;

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return "Here comes the error component";
  }

  return (
    <GlobalWrapper>
      <StyledHeader>
        <Header text="Popular movies" />
      </StyledHeader>
      <MoviesGrid>
        {movies.map((movie) => (
          <MovieTile
            key={movie.id}
            id={movie.id}
            poster={movie.poster_path}
            title={movie.title}
            year={movie.release_date}
            genre={movie.genre_ids.map((id) =>
              genres.genres.find((genre) =>
                genre.id === id).name
            )}
            rating={movie.vote_average}
            votes={movie.vote_count}
          />
        ))}
      </MoviesGrid>
    </GlobalWrapper>
  )
};

export default Movies;