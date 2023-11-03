import PersonTile from "./PersonTile";
import CastTile from "./CastTile";
import CrewTile from "./CrewTile";
import { NameContainer } from "./styled";

const Person = () => (
    <>
        <PersonTile />
        <NameContainer>Movies - cast (4)</NameContainer>
        <CastTile />
        <NameContainer>Movies - crew (4)</NameContainer>
        <CrewTile />
    </>
)

export default Person;