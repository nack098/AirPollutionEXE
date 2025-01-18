import { configureStore } from "@reduxjs/toolkit";
import dateReducer from "./dateSlice";
import latitudeReducer from "./latitudeSlice";
import longitudeReducer from "./longitudeSlice";

export const store = configureStore({
    reducer: {
        date: dateReducer,
        lat: latitudeReducer,
        long: longitudeReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch