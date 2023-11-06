import { configureStore } from '@reduxjs/toolkit';
// import popularMoviesReducer from "./features/movieSlice";
import movieListReducer from "./features/movieList/movieListSlice"

export default configureStore({
    reducer: {
        // popularMovies: popularMoviesReducer,
        movieList: movieListReducer,
    },
});