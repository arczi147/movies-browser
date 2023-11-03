import poster from "../../../images/example-poster.png";
import noPoster from "../../../images/no-poster.svg"
import {
  Container,
  MovieDataContainer,
  Poster,
  NoPoster,
  Year,
  MovieDate,
  MovieDateText,
  GenreTags,
  Tag,
  Stats,
  RatingIcon,
  Rating,
  RatingMax,
  Votes,
  DescriptionText,
} from "./styled";
import { Title } from "../styled";
import { useState, useEffect } from "react";

const MovieTile = ({ title, year, movieDate, movieDateText, genre, rating, ratingMax, votes, description }) => {

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
            <Container>
                <Poster src={poster} alt="Poster" />
                    {/* <NoPoster src={noPoster} alt="Logo" /> */}
                <MovieDataContainer>
                    <Title>{/* {title} */} Mulan</Title>
                    <Year>{/* {year} */} 2020</Year>
                    <MovieDate>
                        <MovieDateText>{/* {movieDateText} */}Production: </MovieDateText>
                        {/* {movieDate} */}China, United States of America
                    </MovieDate>
                    <MovieDate>
                        <MovieDateText>{/* {movieDateText} */}Release date: </MovieDateText>
                        {/* {movieDate} */}24.10.2020
                    </MovieDate>
                    <GenreTags>
                        <Tag>{/* {genre} */}Action</Tag>
                        <Tag>{/* {genre} */}Adventure</Tag>
                        <Tag>{/* {genre} */}Drama</Tag>
                    </GenreTags>
                    <Stats>
                        <RatingIcon />
                        <Rating>{/* {rating} */}7,8</Rating>
                        <RatingMax>{/* {ratingMax} */}/10</RatingMax>
                        <Votes>{/* {votes} */}35 votes</Votes>
                    </Stats>
                    {isWideScreen && <DescriptionText>A young Chinese maiden disguises herself as a male warrior in order to save her father. Disguises herself as a male warrior in order to save her father.  A young Chinese maiden disguises herself as a male warrior in order to save her father.</DescriptionText>}
                </MovieDataContainer>
                {!isWideScreen && <DescriptionText>A young Chinese maiden disguises herself as a male warrior in order to save her father. Disguises herself as a male warrior in order to save her father.  A young Chinese maiden disguises herself as a male warrior in order to save her father.</DescriptionText>}
            </Container>
        </>
    );
}

export default MovieTile;