const URL = "https://api.themoviedb.org/3";
const key = "6910b3d98d8a6ec342c2ba2a935bd407"

export const imageURL = "https://image.tmdb.org/t/p/original";

export const popularMoviesURL = `${URL}/movie/popular?api_key=${key}&language=en-US&page=1`;

export const genresURL = `${URL}/genre/movie/list?api_key=${key}&language=en`;