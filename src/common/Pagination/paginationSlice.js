import { createSlice } from "@reduxjs/toolkit";

const paginationSlice = createSlice({
    name: "pagination",
    initialState: {
        page: 1,
        currentPage: 1,
        totalPages: 1,
    },
    reducers: {
        incrementPage: state => {
            state.page += 1;
            state.currentPage = state.page;
        },
        decrementPage: state => {
            state.page -= 1;
            state.currentPage = state.page;
        },
        goToTheFirstPage: state => {
            state.page = 1
            state.currentPage = state.page;
        },
        goToTheLastPage: (state, action) => {
            state.page = action.payload;
            state.currentPage = state.page;
        },
        setTotalPages: (state, action) => {
            state.totalPages = action.payload;
        },
        setCurrentPage: (state, action) => {
            state.page = action.payload;
            state.currentPage = state.page;
        },
    },
});

export const {
    incrementPage,
    decrementPage,
    goToTheFirstPage,
    goToTheLastPage,
    setTotalPages,
    setCurrentPage,
} = paginationSlice.actions;

export default paginationSlice.reducer;