import PersonTile from "../../../common/PersonTile";
import { PeopleGrid } from "../../../common/PersonTile/styled";
import { useMovieCastTile } from "../useMovieCastTile";
import { useParams } from "react-router-dom";

const MovieCrewTile =  () => {
    const { id } = useParams();
    const movieId = id;

    const moviecrewTile = useMovieCastTile(movieId);

    if (!moviecrewTile) {
		return null;
	}

    const { crew } = moviecrewTile;


    return (
        <PeopleGrid>
            {crew ?
                crew.map(crewElement => 
                    <PersonTile
                        key={crewElement.id}
                        poster={crewElement.profile_path}
                        name={crewElement.name}
                        character={crewElement.job}
                    />
                ) : "-"}
        </PeopleGrid>
    )
}

export default MovieCrewTile;