import { createSlice } from "@reduxjs/toolkit"

const pagingSlice = createSlice({
    name: "paging",
    initialState: {
        page: 1,
    },
    reducers: {
        increment: (state) => {
            state.page += 1;
        },
    },
});

export const { increment } = pagingSlice.actions;
export default pagingSlice.reducer;