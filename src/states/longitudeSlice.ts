import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface LongitudeState {
    value: number
}

const initialState: LongitudeState = {
    value: 0,
};

const longitudeSlice = createSlice({
    name: "longitudeSlicer",
    initialState,
    reducers: {
        changeLong: (state, action: PayloadAction<number>) => {
            state.value = action.payload;
        },
    },
});

export default longitudeSlice.reducer

export const { changeLong } = longitudeSlice.actions