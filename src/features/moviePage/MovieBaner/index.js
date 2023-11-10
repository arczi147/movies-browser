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
	RatingMax,
	Votes
} from "./styled";
import shadow from "../../../images/shadow.png";
import { imageURL } from "../../../common/API/APIData";

function formatNumber(number) {
	return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "\u00A0");
};

const MovieBaner = ({ baner, title, rating, votes }) => (
	<Background>
		<GlobalWrapper>
			<BanerContainer>
				<Shadow src={shadow} alt="Shadow Frame" />
				<Baner src={baner ? (imageURL + baner) : shadow} alt="Baner" />
				<MovieInfo>
					<Title>{title ? title : "Unknown title"}</Title>
					<Stats>
						{votes ? (
							<>
								<RatingIcon />
								<Rating>{rating ? rating.toFixed(1) : "0"}</Rating>
								<RatingMax>/ 10</RatingMax>
								<Votes>{formatNumber(votes) + " votes"}</Votes>
							</>
						) : (
							"No votes yet"
						)}
					</Stats>
				</MovieInfo>
			</BanerContainer>
		</GlobalWrapper>
	</Background>
);

export default MovieBaner;
