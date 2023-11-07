import PersonTile from "../../../common/PersonTile";
import { PeopleGrid } from "../../../common/PersonTile/styled";
import { useMovieCastTile } from "./useMovieCastTile";
import { useParams } from "react-router-dom";

const MovieCastTile =  () => {
    const { id } = useParams();
    const movieId = id;

    const movieCastTile = useMovieCastTile(movieId);

    if (!movieCastTile) {
		return null;
	}

    const { cast } = movieCastTile;


    return (
        <PeopleGrid>
            {cast ?
                cast.map(castElement => 
                    <PersonTile
                        poster={castElement.profile_path}
                        name={castElement.name}
                        character={castElement.character}
                    />
                ) : "-"}
        </PeopleGrid>
    )
}

export default MovieCastTile;