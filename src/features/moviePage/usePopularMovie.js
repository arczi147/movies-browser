import { useState, useEffect } from "react";
import { fetchAPI } from "../../common/API/fetchAPI";

export const usePopularMovie = (movieId) => {
    const [popularMovie, setPopularMovie] = useState(null);
  
    useEffect(() => {
      const getPopularMovie = async () => {
        try {
          const response = await fetchAPI(`https://api.themoviedb.org/3/movie/${movieId}?api_key=6910b3d98d8a6ec342c2ba2a935bd407&language=en-US&`);
          setPopularMovie(response);
        } catch {
          console.log("Błąd");
        }
      };
      const timeout = setTimeout(getPopularMovie, 1);

      return () => clearTimeout(timeout)
    }, [movieId]);
  
    return popularMovie;
  };
