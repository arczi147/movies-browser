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
import baner from "./baner.png";
import shadow from "../../../images/shadow.png"

const MovieBaner = () => (
	<Background>
		<GlobalWrapper>
			<BanerContainer>
				<Shadow src={shadow} alt="Shadow Frame" />
				<Baner src={baner} alt="Baner" />
				<MovieInfo>
					<Title>Mulan long title</Title>
					<Stats>
						<RatingIcon />
						<Rating>7,8</Rating>
						<RatingScale>/ 10</RatingScale>
						<Votes>335 votes</Votes>
					</Stats>
				</MovieInfo>
			</BanerContainer>
		</GlobalWrapper>
	</Background>
);

export default MovieBaner;
