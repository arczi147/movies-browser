import { createSlice } from '@reduxjs/toolkit';

const movieSlice = createSlice({
    name: 'popularMovies',
    initialState: {
        popularMovies: [],
        loading: false,
        error: false,
    },
    reducers: {
    },
});


export const selectPopularMoviesState = state => state.popularMovies;

export const selectPopularMovies = state => selectPopularMoviesState(state).popularMovies;

export const getMovieById = (state, popularMoviesId) =>
    selectPopularMovies(state).find(({ id }) => id === popularMoviesId);

export default movieSlice.reducer;