import { Container, PersonDataContainer, PersonPhoto, NoPhoto, Name, Character } from "./styled";
import { imageURL } from "../API/APIData";
import noPhoto from "../../images/no-person.svg"

const PersonTile = ({ name, character, poster }) => (
    <Container>
        <PersonDataContainer>
            {poster ? (
                <PersonPhoto src={imageURL + poster} alt="Famous person" />
            ) : (
                <NoPhoto src={noPhoto} alt="Logo" />
            )}
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