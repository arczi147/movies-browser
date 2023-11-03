import image from "../../images/example-person.png";
import { 
    PersonTile, 
    Image, 
    PersonDataContainer, 
    NameContainer, 
    BirthText,
    BirthDate,
    DescriptionText,
} from "./styled";

import MovieTile from "../../common/MovieTile";
import { MoviesGrid } from "../../common/MovieTile/styled";
import { useState, useEffect } from "react";

const Person = ({ imagePerson, name, birthDate, birthPlace, description }) => {

    const [isWideScreen, setIsWideScreen] = useState(window.innerWidth > 979);

    useEffect(() => {
        const handleResize = () => {
            setIsWideScreen(window.innerWidth > 979);
        }

        window.addEventListener('resize', handleResize);

        return () => {
			window.removeEventListener('resize', handleResize)
		}
    },[]);

    return (
        <>
            <PersonTile>
                <Image src={image} alt="PersonImage"/>
                <PersonDataContainer>
                    <NameContainer>
                        Liu Yifei
                    </NameContainer>
                    <BirthDate>
                        <BirthText>Date of birth: </BirthText>
                        25.08.1987
                    </BirthDate>
                    <BirthDate> 
                        <BirthText>Place of birth:  </BirthText>
                        Wuhan, Hubei, China 
                    </BirthDate>
                    {isWideScreen && <DescriptionText>Liu Yifei was born in Wuhan, Hubei, Province of China on August 25th, 1987. She began modeling at the age of 8 and was trained in singing, dancing and the piano. Moving to the United States at 10 with her mother, Liu lived there for four years.</DescriptionText>}
                </PersonDataContainer>
                {!isWideScreen && <DescriptionText>Liu Yifei was born in Wuhan, Hubei, Province of China on August 25th, 1987. She began modeling at the age of 8 and was trained in singing, dancing and the piano. Moving to the United States at 10 with her mother, Liu lived there for four years.</DescriptionText>}
            </PersonTile>
            <NameContainer>Movies - cast (4)</NameContainer>
            <MoviesGrid>
                <MovieTile />
                <MovieTile />
                <MovieTile />
                <MovieTile />
            </MoviesGrid>
            <NameContainer>Movies - crew (4)</NameContainer>
            <MoviesGrid>
                <MovieTile />
                <MovieTile />
                <MovieTile />
                <MovieTile />
            </MoviesGrid>
        </>
    )
}

export default Person;