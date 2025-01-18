import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface LatitudeState {
    value: number
}

const initialState: LatitudeState = {
    value: 0,
};

const latitudeSlice = createSlice({
    name: "latitudeSlicer",
    initialState,
    reducers: {
        changeLat: (state, action: PayloadAction<number>) => {
            state.value = action.payload;
        },
    },
});

export default latitudeSlice.reducer

export const { changeLat } = latitudeSlice.actions