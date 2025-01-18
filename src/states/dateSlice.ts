import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface DateState {
    value: string;
}

const initialState: DateState = {
    value: "2025-01-01",
};

const dateSlice = createSlice({
    name: "dateSlicer",
    initialState,
    reducers: {
        changeDate: (state, action: PayloadAction<string>) => {
            state.value = action.payload;
        },
    },
});

export default dateSlice.reducer

export const { changeDate } = dateSlice.actions