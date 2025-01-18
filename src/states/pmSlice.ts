import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PmState {
    value: number
}

const initialState: PmState = {
    value: 0,
};

const pmSlice = createSlice({
    name: "pmSlicer",
    initialState,
    reducers: {
        changePm: (state, action: PayloadAction<number>) => {
            state.value = action.payload;
        },
    },
});

export default pmSlice.reducer

export const { changePm } = pmSlice.actions