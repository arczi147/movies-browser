import { Container, PersonDataContainer, PersonPhoto, Name, Character } from "./styled";
import personPhoto from "../../images/example-person.png";

const PersonTile = () => (
    <Container>
        <PersonDataContainer>
            <PersonPhoto src={personPhoto} alt="Famous person" />
            <Name>
                {/* {name} */} Liu Yifei
            </Name>
            <Character>
                {/* {character */} Mulan
            </Character>
        </PersonDataContainer>
    </Container>
);

export default PersonTile;