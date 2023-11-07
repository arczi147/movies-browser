import { Container, PersonDataContainer, PersonPhoto, Name, Character } from "./styled";
import { imageURL } from "../API/APIData";

const PersonTile = ({ name, character, poster }) => (
    <Container>
        <PersonDataContainer>
            <PersonPhoto src={imageURL + poster} alt="Famous person" />
            <Name>
                {name}
            </Name>
            <Character>
                {character}
            </Character>
        </PersonDataContainer>
    </Container>
);

export default PersonTile;