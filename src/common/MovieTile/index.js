import poster from "../../images/example-poster.png";
import {
  Container,
  MovieDataContainer,
  Poster,
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

const MovieTile = ({ title, year, genre, rating, votes }) => (
    <Container>
      <Poster src={poster} alt="Poster" />
      <MovieDataContainer>
        <Info>
          <Title>
            {/* {title} */} Mulan
          </Title>
          <Year>
            {/* {year} */} 2020
          </Year>
          <GenreTags>
            <Tag>
              {/* {genre} */}Action
            </Tag>
            <Tag>
              {/* {genre} */}Adventure
            </Tag>
            <Tag>
              {/* {genre} */}Drama
            </Tag>
          </GenreTags>
        </Info>
        <Stats>
          <RatingIcon />
          <Rating>
            {/* {rating} */}7,8
          </Rating>
          <Votes>
            {/* {votes} */}35 votes
          </Votes>
        </Stats>
      </MovieDataContainer>
    </Container>
);

export default MovieTile;