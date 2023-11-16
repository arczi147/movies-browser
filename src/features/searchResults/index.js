import Header from "../../common/Header";
import MovieTile from "../../common/MovieTile";
import PersonTile from "../../common/PersonTile";
import { MoviesGrid } from "../../common/MovieTile/styled";
import { GridWrapper } from "../../common/GridWrapper/styled";
import { PeopleGrid } from "../../common/PersonTile/styled";
import { GlobalWrapper } from "../../common/GlobalWrapper/styled";
import { StyledHeader } from "../movieList/styled";
import { useSearchResults } from "./useSearchResults";
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
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";


const SearchResults = () => {
    const { searchResults, loading, error } = useSearchResults();
    const { genres } = useGenres();
    const dispatch = useDispatch();
    const location = useLocation();
    const page = useSelector(state => state.pagination.page)
    const query = (new URLSearchParams(location.search)).get("query")
    const moviesPage = location.pathname.includes("/movies");
    const totalPages = searchResults.total_pages || 1;

    if (loading) {
        return <Loading />;
    }

    if (error) {
        return <Error />;
    }

    try {
        const output = searchResults.results

        return (
            <GlobalWrapper>
                <StyledHeader>
                    <Header text={
                        `Search results for "${query}" (${searchResults.total_results})`
                    }
                    />
                </StyledHeader>
                {moviesPage ? (
                    <MoviesGrid>
                        {output.map((movie) => (
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
                ) : (
                    <GridWrapper>
                        <PeopleGrid>
                            {output.map((person) => (
                                <PersonTile
                                    key={person.id}
                                    id={person.id}
                                    name={person.name}
                                    poster={person.profile_path}
                                />
                            ))}
                        </PeopleGrid>
                    </GridWrapper>
                )}
                <Pagination
                    page={page}
                    onPrev={() => dispatch(decrementPage())}
                    onNext={() => dispatch(incrementPage())}
                    onFirst={() => dispatch(goToTheFirstPage())}
                    onLast={() => dispatch(goToTheLastPage(totalPages))}
                    totalPages={totalPages}
                />
            </GlobalWrapper>
        );
    } catch {
        return ""
    }
};

export default SearchResults;