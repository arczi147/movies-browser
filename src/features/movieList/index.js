import Header from "../../common/Header";
import MovieTile from "../../common/MovieTile";
import { MoviesGrid } from "../../common/MovieTile/styled";
import { GlobalWrapper } from "../../common/GlobalWrapper/styled";
import { StyledHeader } from "./styled";
import { usePopularMovies } from "./usePopularMovies";
import { useGenres } from "../../common/useGenres";
import Loading from "../../common/Loading";
import Error from "../../common/Error";
import Pagination from "../../common/Pagination";
import {
	decrementPage,
	incrementPage,
	goToTheLastPage,
	goToTheFirstPage
} from "../../common/Pagination/paginationSlice";
import { useSelector, useDispatch } from "react-redux";


const PopularMovies = () => {
	const { popularMovies, loading, error } = usePopularMovies();
	const { genres } = useGenres();
	const dispatch = useDispatch();
	const page = useSelector(state => state.pagination.page)

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
				<Pagination
					page={page}
					onPrev={() => dispatch(decrementPage())}
					onNext={() => dispatch(incrementPage())}
					onFirst={() => dispatch(goToTheFirstPage())}
					onLast={() => dispatch(goToTheLastPage())}
				/>
			</GlobalWrapper>
		);
	} catch {
		return <Error />;
	}
};

export default PopularMovies;