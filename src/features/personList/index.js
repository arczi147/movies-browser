import Header from "../../common/Header";
import { StyledHeader } from "./styled";
import { PeopleGrid } from "../../common/PersonTile/styled";
import PersonTile from "../../common/PersonTile";
import Pagination from "../../common/Pagination";
import { GlobalWrapper } from "../../common/GlobalWrapper/styled";
import { usePopularPeople } from "./usePopularPeople";
import Loading from "../../common/Loading";
import Error from "../movieList/Error";

const PopularPeople = () => {
    const { popularPeople, loading, error } = usePopularPeople();

    if (loading) {
        return <Loading />;
    }

    if (error) {
        return <Error />;
    }

    try {
        const people = popularPeople.results;

        return (
            <GlobalWrapper>
                <StyledHeader>
                    <Header text="Popular people" />
                </StyledHeader>
                <PeopleGrid>
                    {people.map((person) => (
                        <PersonTile
                            name={person.name}
                            poster={person.profile_path}
                        />
                    ))}
                </PeopleGrid>
                <Pagination />
            </GlobalWrapper>
        )

    } catch {
        <Error />;
    }
};

export default PopularPeople;