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
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { getMovieById } from "../../movieSlice";

const MovieTileDetails = ({ id, poster, title, year, genre, rating, votes }) => {

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

    const params = useParams();
    const popularMovie = useSelector(state => getMovieById(state, params.id));

    return (
        <>
            <Container>
                <Poster src={poster} alt="Poster" />
                    {/* <NoPoster src={noPoster} alt="Logo" /> */}
                <MovieDataContainer>
                    <Title>{popularMovie.title}</Title>
                    <Year>{year}</Year>
                    <MovieDate>
                        <MovieDateText>{/* {movieDateText} */}Production: </MovieDateText>
                        {/* {movieDate} */}China, United States of America
                    </MovieDate>
                    <MovieDate>
                        <MovieDateText>{/* {movieDateText} */}Release date: </MovieDateText>
                        {/* {movieDate} */}24.10.2020
                    </MovieDate>
                    <GenreTags>
                        <Tag>{genre}</Tag>
                        <Tag>{genre}</Tag>
                        <Tag>{genre}</Tag>
                    </GenreTags>
                    <Stats>
                        <RatingIcon />
                        <Rating>{rating}</Rating>
                        <RatingMax>{/* {ratingMax} */}/10</RatingMax>
                        <Votes>{votes}</Votes>
                    </Stats>
                    {isWideScreen && <DescriptionText>A young Chinese maiden disguises herself as a male warrior in order to save her father. Disguises herself as a male warrior in order to save her father.  A young Chinese maiden disguises herself as a male warrior in order to save her father.</DescriptionText>}
                </MovieDataContainer>
                {!isWideScreen && <DescriptionText>A young Chinese maiden disguises herself as a male warrior in order to save her father. Disguises herself as a male warrior in order to save her father.  A young Chinese maiden disguises herself as a male warrior in order to save her father.</DescriptionText>}
            </Container>
        </>
    );
}

export default MovieTileDetails;