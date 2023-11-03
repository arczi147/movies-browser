import PersonTile from "./PersonTile";
import CastTile from "./CastTile";
import CrewTile from "./CrewTile";
import { NameContainer } from "./styled";
import { GlobalWrapper } from "../../common/GlobalWrapper/styled";

const Person = () => (
    <GlobalWrapper>
        <PersonTile />
        <NameContainer>Movies - cast (4)</NameContainer>
        <CastTile />
        <NameContainer>Movies - crew (4)</NameContainer>
        <CrewTile />
    </GlobalWrapper>
)

export default Person;