import { createSlice } from "@reduxjs/toolkit";

const paginationSlice = createSlice({
    name: "pagination",
    initialState: {
        page: 1,
    },
    reducers: {
        incrementPage: state => {
            state.page += 1;
        },
        decrementPage: state => {
            state.page -= 1;
        },
        goToTheFirstPage: state => {
            state.page = 1
        },
        goToTheLastPage: state => {
            state.page = 500
        },
    },
});

export const {
    incrementPage,
    decrementPage,
    goToTheFirstPage,
    goToTheLastPage
} = paginationSlice.actions;

export default paginationSlice.reducer;