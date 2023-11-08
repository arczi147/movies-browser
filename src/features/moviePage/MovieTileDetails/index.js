import noPoster from "../../../images/no-poster.svg"
import {
  Container,
  MovieDataContainer,
  Poster,
  NoPoster,
  Title,
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
import { useState, useEffect } from "react";
import { usePopularMovie } from "../usePopularMovie";
import { useParams } from "react-router-dom";
import { imageURL } from "../../../common/API/APIData";

function formatNumber(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "\u00A0");
  };

const MovieTileDetails = () => {

    const [isWideScreen, setIsWideScreen] = useState(window.innerWidth > 979);
    const { id } = useParams();
    const movieId = id;

    useEffect(() => {
        const handleResize = () => {
            setIsWideScreen(window.innerWidth > 979);
        }

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, []);

    const { popularMovie } = usePopularMovie(movieId);

    if (!popularMovie) {
		return null
	}

    const {poster_path, title, release_date, production_countries, genres, vote_average, vote_count, overview} = popularMovie;

    return (
        <>
            <Container>
                {poster_path ? (
                    <Poster src={imageURL + poster_path} alt="Poster" />
                ) : (
                    <NoPoster src={noPoster} alt="Logo" />
                )}
                <MovieDataContainer>
                    <Title>{title}</Title>
                    <Year>
                        {release_date ? new Date(release_date).toLocaleDateString(
                            undefined,
                            { year: "numeric" },
                        ) : "-"}
                    </Year>
                    <MovieDate>
                        <MovieDateText>Production: </MovieDateText>
                        {production_countries ? production_countries.map(country => country.name) : "-"}
                    </MovieDate>
                    <MovieDate>
                        <MovieDateText>Release date: </MovieDateText>
                            {release_date ? new Date(release_date).toLocaleDateString( undefined, {
						        day: '2-digit',
						        month: '2-digit',
						        year: 'numeric',
					        }) : "-"}
                    </MovieDate>
                    <GenreTags>
                        {genres ? genres.map(({ id, name }) => <Tag key={id}>{name}</Tag>) : ""}
                    </GenreTags>
                    <Stats>
                        <RatingIcon />
                        <Rating>{vote_average ? vote_average.toFixed(1) : "-"}</Rating>
                        <RatingMax>/ 10</RatingMax>
                        <Votes>{vote_count ? formatNumber(vote_count) : "0"} votes</Votes>
                    </Stats>
                    {isWideScreen && <DescriptionText>{overview ? overview : ""}</DescriptionText>}
                </MovieDataContainer>
                {!isWideScreen && <DescriptionText>{overview ? overview : ""}</DescriptionText>}
            </Container>
        </>
    );
}

export default MovieTileDetails;