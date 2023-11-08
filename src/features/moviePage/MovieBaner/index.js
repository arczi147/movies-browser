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

function formatNumber(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "\u00A0");
};

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
  						<Rating>{vote_average ? vote_average.toFixed(1) : "-"}</Rating>
  						<RatingScale>/ 10</RatingScale>
  						<Votes>{vote_count ? formatNumber(vote_count) : "0"} votes</Votes>
  					</Stats>
  				</MovieInfo>
  			</BanerContainer>
  		</GlobalWrapper>
  	</Background>
  );
}

export default MovieBaner;
