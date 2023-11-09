import { useEffect, useState } from "react";
import { popularPeopleURL } from "../../common/API/APIData";
import { fetchAPI } from "../../common/API/fetchAPI";

export const usePopularPeople = () => {
    const [popularPeople, setPopularPeople] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getPopularPeople = async () => {
            try {
                setLoading(true);
                const response = await fetchAPI(popularPeopleURL);
                setPopularPeople(response);
            } catch (error) {
                setError("Error while fetching data from external API", error);
            } finally {
                setLoading(false);
            }
        };

        getPopularPeople();
    }, []);

    return { popularPeople, loading, error }
};