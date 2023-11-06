import noPoster from "../../images/no-poster.svg"
import { imageURL } from "../API/APIData";
import {
  Container,
  MovieDataContainer,
  Poster,
  NoPoster,
  Info,
  Title,
  Year,
  GenreTags,
  Tag,
  Stats,
  RatingIcon,
  Rating,
  Votes,
} from "./styled";

function formatNumber(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "\u00A0");
};

const MovieTile = ({ id, poster, title, year, genre, rating, votes }) => (
    <Container to={`/movies/${id}`}>
      {poster ? (
        <Poster src={imageURL + poster} alt="Poster" />
      ) : (
        <NoPoster src={noPoster} alt="Logo" />
      )}
      <MovieDataContainer>
        <Info>
          <Title>{title}</Title>
          <Year>{new Date(year).getFullYear()}</Year>
          <GenreTags>
            {genre.map((genreName, index) => (
              <Tag key={index}>{genreName}</Tag>
            ))}
          </GenreTags>
        </Info>
        <Stats>
          <RatingIcon />
          <Rating>{rating.toFixed(1)}</Rating>
          <Votes>{formatNumber(votes)} votes</Votes>
        </Stats>
      </MovieDataContainer>
    </Container>
);

export default MovieTile;