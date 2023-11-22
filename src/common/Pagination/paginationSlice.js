import { createSlice } from "@reduxjs/toolkit";
import { getPageFromURL } from "./getPageFromURL";

const paginationSlice = createSlice({
    name: "pagination",
    initialState: {
        page: getPageFromURL(),
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
    setCurrentPage
} = paginationSlice.actions;

export const selectPaginationState = state => state.pagination;
export const selectPage = state => selectPaginationState(state).page;

export default paginationSlice.reducer;