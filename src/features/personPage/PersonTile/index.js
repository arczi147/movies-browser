import image from "../../../images/example-person.png";
import { 
    PersonTileContainer, 
    Image, 
    PersonDataContainer, 
    BirthText,
    BirthDate,
    DescriptionText,
} from "./styled";
import { NameContainer } from ".././styled";
import { useState, useEffect } from "react";

const PersonTile = ({ imagePerson, name, birthDate, birthPlace, description }) => {

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
            <PersonTileContainer>
                <Image src={image} alt="PersonImage"/> {/* {imagePerson */} 
                <PersonDataContainer>
                    <NameContainer>
                        Liu Yifei {/* {name */} 
                    </NameContainer>
                    <BirthDate>
                        <BirthText>Date of birth: </BirthText>
                        25.08.1987 {/* {birthDate */} 
                    </BirthDate>
                    <BirthDate> 
                        <BirthText>Place of birth:  </BirthText>
                        Wuhan, Hubei, China {/* {birthPlace */} 
                    </BirthDate>
                    {isWideScreen && <DescriptionText>{/* {description */}Liu Yifei was born in Wuhan, Hubei, Province of China on August 25th, 1987. She began modeling at the age of 8 and was trained in singing, dancing and the piano. Moving to the United States at 10 with her mother, Liu lived there for four years.</DescriptionText>}
                </PersonDataContainer>
                {!isWideScreen && <DescriptionText>{/* {description */}Liu Yifei was born in Wuhan, Hubei, Province of China on August 25th, 1987. She began modeling at the age of 8 and was trained in singing, dancing and the piano. Moving to the United States at 10 with her mother, Liu lived there for four years.</DescriptionText>}
            </PersonTileContainer>
        </>
    )
}

export default PersonTile;