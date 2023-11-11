import PersonTile from "./PersonTile";
import CastTile from "./CastTile";
import CrewTile from "./CrewTile";
import { NameContainer } from "./styled";
import { GlobalWrapper } from "../../common/GlobalWrapper/styled";
import { useParams } from "react-router-dom";
import { usePopularPerson } from "./usePopularPerson";
import Loading from "../../common/Loading";
import Error from "../../common/Error";

const Person = () => {
    const { id } = useParams();
    const personId = id;

    const { popularPerson, loading, error } = usePopularPerson(personId);

    if (loading) {
        return <Loading />;
    }

    if (error) {
        return <Error />;
    }

    return (
        <GlobalWrapper>
            <PersonTile
                key={popularPerson.id}
                poster={popularPerson.profile_path}
                name={popularPerson.name}
                birthDate={popularPerson.birthday}
                birthPlace={popularPerson.place_of_birth}
                description={popularPerson.biography}
            />
            <NameContainer>Movies - cast (4)</NameContainer>
            <CastTile />
            <NameContainer>Movies - crew (4)</NameContainer>
            <CrewTile />
        </GlobalWrapper>
    )
};

export default Person;