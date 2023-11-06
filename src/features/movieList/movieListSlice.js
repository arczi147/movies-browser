import { createSlice } from "@reduxjs/toolkit";

const movieListSlice = createSlice({
    name: "movieList",
    initialState: {
        page: 1,
    },
    reducers: {
        incrementPage: state => {
            state.page += 1;
        },
        decrementPage: state => {
            if (state.page > 1) {
                state.page -= 1;
            }
        },
    },
});

export const { incrementPage, decrementPage } = movieListSlice.actions;

export default movieListSlice.reducer;