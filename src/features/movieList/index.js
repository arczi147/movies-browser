import Header from "../../common/Header";
import MovieTile from "../../common/MovieTile";
import { MoviesGrid } from "../../common/MovieTile/styled";
import { GlobalWrapper } from "../../common/GlobalWrapper/styled";
import { StyledHeader } from "./styled";
import { usePopularMovies } from "./usePopularMovies";
import { useGenres } from "../../common/useGenres";
import Loading from "./Loading";
import Error from "./Error";

const PopularMovies = () => {
	const { popularMovies, loading, error } = usePopularMovies();
	const { genres } = useGenres();
  
	if (loading) {
	  return <Loading />;
	}
  
	if (error) {
	  return <Error />;
	}
  
	try {
	  const movies = popularMovies.results;
  
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
	  );
	} catch {
	  return <Error />;
	}
  };

export default PopularMovies;