import Header from "../../common/Header";
import { StyledHeader, PeopleGrid } from "./styled";
import PersonTile from "./PersonTile";

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
    </>
);

export default PopularPeople;