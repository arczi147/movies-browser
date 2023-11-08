import { useState, useEffect } from "react";
import { fetchAPI } from "../../common/API/fetchAPI";
import { URL, key } from "../../common/API/APIData";

export const usePopularMovie = (movieId) => {
    const [popularMovie, setPopularMovie] = useState(null);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const getPopularMovie = async () => {
        try {
          const response = await fetchAPI(`${URL}/movie/${movieId}?api_key=${key}&language=en-US&`);
          setPopularMovie(response);
          setLoading(false);
        } catch {
          console.log("Błąd");
          setLoading(false);
        }
      };
      const timeout = setTimeout(getPopularMovie, 1000);

      return () => clearTimeout(timeout)
    }, [movieId]);
  
    return {popularMovie, loading};
  };
