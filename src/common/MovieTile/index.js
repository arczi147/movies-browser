import noPoster from "../../images/no-poster.svg"
import { imageURL } from "../API/APIData";
import {
	Container,
	MovieDataContainer,
	Poster,
	NoPoster,
	Info,
	Title,
	CharacterAndYearElements,
	Character,
	Year,
	YearInParentheses,
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

const MovieTile = ({ id, poster, title, character, year, yearInParentheses, genre, rating, votes }) => (
	<Container to={`/movies/${id}`}>
		{poster ? (
			<Poster src={imageURL + poster} alt="Poster" />
		) : (
			<NoPoster src={noPoster} alt="Logo" />
		)}
		<MovieDataContainer>
			<Info>
				<Title>{title ? title : "Unknown title"}</Title>
				<CharacterAndYearElements>
					<Character>{character ? character : ""}</Character>
					<Year>{year ? (new Date(year).getFullYear()) : ""}</Year>
					<YearInParentheses>
						{yearInParentheses ?
							`(${(new Date(yearInParentheses).getFullYear())})` : ""}
					</YearInParentheses>
				</CharacterAndYearElements>
				<GenreTags>
					{genre ? (
						genre.map((genreName, index) => (
							<Tag key={index}>{genreName}</Tag>
						))
					) : ""}
				</GenreTags>
			</Info>
			<Stats>
				{votes ? (
					<>
						<RatingIcon />
						<Rating>{rating ? rating.toFixed(1) : "0"}</Rating>
					</>
				) : (
					""
				)}
				<Votes>
					{votes ? formatNumber(votes) + " votes" : "No votes yet"}
				</Votes>
			</Stats>
		</MovieDataContainer>
	</Container>
);

export default MovieTile;