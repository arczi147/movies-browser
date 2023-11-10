import Header from "../../common/Header";
import { StyledHeader } from "./styled";
import { PeopleGrid } from "../../common/PersonTile/styled";
import PersonTile from "../../common/PersonTile";
import Pagination from "../../common/Pagination";
import {
    decrementPage,
    goToTheFirstPage,
    goToTheLastPage,
    incrementPage
} from "../../common/Pagination/paginationSlice";
import { GlobalWrapper } from "../../common/GlobalWrapper/styled";
import { usePopularPeople } from "./usePopularPeople";
import Loading from "../../common/Loading";
import Error from "../../common/Error";
import { useDispatch, useSelector } from "react-redux";
import { GridWrapper } from "../../common/GridWrapper/styled";

const PopularPeople = () => {
    const { popularPeople, loading, error } = usePopularPeople();
    const dispatch = useDispatch();
    const page = useSelector(state => state.pagination.page);

    if (loading) {
        return <Loading />;
    }

    if (error) {
        return <Error />;
    }

    try {
        const people = popularPeople.results;

        return (
            <>
                <GlobalWrapper>
                    <StyledHeader>
                        <Header text="Popular people" />
                    </StyledHeader>
                </GlobalWrapper>
                <GridWrapper>
                    <PeopleGrid>
                        {people.map((person) => (
                            <PersonTile
                                name={person.name}
                                poster={person.profile_path}
                            />
                        ))}
                    </PeopleGrid>
                </GridWrapper>
                <Pagination
                    page={page}
                    onFirst={() => dispatch(goToTheFirstPage())}
                    onPrev={() => dispatch(decrementPage())}
                    onNext={() => dispatch(incrementPage())}
                    onLast={() => dispatch(goToTheLastPage())}
                />
            </>
        )

    } catch {
        <Error />;
    }
};

export default PopularPeople;