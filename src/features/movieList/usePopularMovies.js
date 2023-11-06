import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { popularMoviesURL } from "../../common/API/APIData";
import { fetchAPI } from "../../common/API/fetchAPI";

export const usePopularMovies = () => {
	const [popularMovies, setPopularMovies] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const page = useSelector(state => state.movieList.page);
	const fetchingURL = `${popularMoviesURL}&page=${page}`;

	useEffect(() => {
		const getPopularMovies = async () => {
			try {
				const response = await fetchAPI(fetchingURL);
				setPopularMovies(response);
				setLoading(false);
			} catch (error) {
				setError("Error while fetching data from external API", error);
				setLoading(false);
			}
		};
		const timeout = setTimeout(getPopularMovies, 1000);

		return () => clearTimeout(timeout)
	}, [fetchingURL]);

	return { popularMovies, loading, error };
};