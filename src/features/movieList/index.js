import Header from "../../common/Header";
import MovieTile from "../../common/MovieTile";
import { MoviesGrid } from "../../common/MovieTile/styled";
import { GlobalWrapper } from "../../common/GlobalWrapper/styled";
import { StyledHeader } from "./styled";
import { usePopularMovies } from "./usePopularMovies";
import { useGenres } from "../../common/useGenres";

const Movies = () => {
  const { popularMovies, loading, error } = usePopularMovies();
  const { genres } = useGenres();
  const movies = popularMovies.results;

  const mapGenreIdsToNames = (genreIds) => {
    return genreIds.map((id) => {
      const genre = genres.genres.find((genre) => genre.id === id);
      return genre ? genre.name : "Unknown";
    });
  };

  if (loading) {
    return "Here comes the loading component";
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
            poster={movie.poster_path}
            title={movie.title}
            year={movie.release_date}
            genre={mapGenreIdsToNames(movie.genre_ids).join(", ")}
            rating={movie.vote_average}
            votes={movie.vote_count}
          />
        ))}
      </MoviesGrid>
    </GlobalWrapper>
  )
};

export default Movies;