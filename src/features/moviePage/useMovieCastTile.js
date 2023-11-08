import { useState, useEffect } from "react";
import { fetchAPI } from "../../common/API/fetchAPI";
import { URL, key } from "../../common/API/APIData";

export const useMovieCastTile = (movieId) => {
    const [movieCastTile, setMovieCastTile] = useState(null);
  
    useEffect(() => {
      const getMovieCastTile = async () => {
        try {
          const response = await fetchAPI(`${URL}/movie/${movieId}/credits?api_key=${key}&language=en-US&`);
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
