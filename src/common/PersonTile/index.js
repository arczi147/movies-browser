import React, { useState } from "react";
import { Container, PersonDataContainer, PersonPhoto, Name, Character, Placeholder } from "./styled";
import { imageURL } from "../API/APIData";
import noPhoto from "../../images/no-person.svg";

const PersonTile = ({ id, name, character, poster }) => {
    const [imageLoading, setImageLoading] = useState(true);

    const handleImageLoaded = () => {
        setImageLoading(false);
    };

    return (
        <Container to={`/people/${id}`}>
            <PersonDataContainer>
                {imageLoading && (
                    <Placeholder />
                )}
                {poster ? (
                    <PersonPhoto
                        src={imageURL + "w185" + poster}
                        alt="Famous person"
                        onLoad={handleImageLoaded}
                        style={{ display: imageLoading ? "none" : "block" }}
                    />
                ) : (
                    <PersonPhoto src={noPhoto} alt="Logo" />
                )}
                <Name>{name}</Name>
                <Character>{character}</Character>
            </PersonDataContainer>
        </Container>
    );
};

export default PersonTile;
