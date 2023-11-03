import Header from "../../common/Header";
import { StyledHeader } from "./styled";
import { PeopleGrid } from "../../common/PersonTile/styled";
import PersonTile from "../../common/PersonTile";
import Pagination from "../../common/Pagination";

const PopularPeople = () => (
    <>
        <StyledHeader>
            <Header text="Popular people" />
        </StyledHeader>
        <PeopleGrid>
            <PersonTile />
            <PersonTile />
            <PersonTile />
            <PersonTile />
            <PersonTile />
            <PersonTile />
            <PersonTile />
            <PersonTile />
            <PersonTile />
            <PersonTile />
            <PersonTile />
        </PeopleGrid>
        <Pagination />
    </>
);

export default PopularPeople;