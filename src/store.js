import { configureStore } from '@reduxjs/toolkit';
import popularMoviesReducer from "./features/movieSlice";

export default configureStore({
 reducer: {
    popularMovies: popularMoviesReducer,
 },
});