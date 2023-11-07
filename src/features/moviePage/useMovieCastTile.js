import { useState, useEffect } from "react";
import { fetchAPI } from "../../common/API/fetchAPI";

export const useMovieCastTile = (movieId) => {
    const [movieCastTile, setMovieCastTile] = useState(null);
  
    useEffect(() => {
      const getMovieCastTile = async () => {
        try {
          const response = await fetchAPI(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=6910b3d98d8a6ec342c2ba2a935bd407&language=en-US&`);
          setMovieCastTile(response);
        } catch {
          console.log("Błąd");
        }
      };
      const timeout = setTimeout(getMovieCastTile, 1000);

      return () => clearTimeout(timeout)
    }, [movieId]);
  
    return movieCastTile;
  };
