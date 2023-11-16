import noPoster from "../../images/no-poster.svg"
import { imageURL } from "../API/APIData";
import {
	Container,
	Placeholder,
	MovieDataContainer,
	Poster,
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
import { useState } from "react";

function formatNumber(number) {
	return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "\u00A0");
};

const MovieTile = ({
	id,
	poster,
	title,
	character,
	year,
	yearInParentheses,
	genre,
	rating,
	votes
}) => {

	const [imageLoading, setImageLoading] = useState(true);

	const handleImageLoaded = () => {
		setImageLoading(false);
	};


	return (
		(
			<Container to={`/movies/${id}`}>
				{poster ? (
					<>
						{imageLoading && (
							<Placeholder />
						)}
						<Poster
							src={imageURL + "w342" + poster}
							alt="Poster"
							onLoad={handleImageLoaded}
							style={{ display: imageLoading ? "none" : "block" }}
						/>
					</>
				) : (
					<Poster src={noPoster} alt="Logo" />
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
								<Rating>{rating ? rating.toFixed(1).replace(".", ",") : "0"}</Rating>
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
		)
	)
};

export default MovieTile;