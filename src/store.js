import { configureStore } from '@reduxjs/toolkit';
// import popularMoviesReducer from "./features/movieSlice";
import paginationReducer from "./common/Pagination/paginationSlice"

export default configureStore({
    reducer: {
        // popularMovies: popularMoviesReducer,
        pagination: paginationReducer,
    },
});