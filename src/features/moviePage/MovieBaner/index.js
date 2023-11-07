import { GlobalWrapper } from "../../../common/GlobalWrapper/styled";
import { 
  Background,
  BanerContainer,
  Shadow,
  Baner,
  MovieInfo,
  Title,
  Stats,
  RatingIcon,
  Rating,
  RatingScale,
  Votes
} from "./styled";
import shadow from "../../../images/shadow.png";
import { usePopularMovie } from "../usePopularMovie";
import { useParams } from "react-router-dom";
import { imageURL } from "../../../common/API/APIData";

const MovieBaner = () => {
   
  const { id } = useParams();
  const movieId = id;

  const { popularMovie } = usePopularMovie(movieId);

    if (!popularMovie) {
		return null
	}

  const {title, vote_average, vote_count, backdrop_path} = popularMovie;

  if(!backdrop_path) {
    return null;
  }

  return (
    <Background>
      <GlobalWrapper>
        <BanerContainer>
          <Shadow src={shadow} alt="Shadow Frame" />
          <Baner src={imageURL + backdrop_path} alt="Baner" />
          <MovieInfo>
            <Title>{title}</Title>
            <Stats>
              <RatingIcon />
              <Rating>{vote_average ? vote_average : "-"}</Rating>
              <RatingScale>/ 10</RatingScale>
              <Votes>{vote_count ? vote_count : "0"} votes</Votes>
            </Stats>
          </MovieInfo>
        </BanerContainer>
      </GlobalWrapper>
    </Background>
  );
}

export default MovieBaner;
