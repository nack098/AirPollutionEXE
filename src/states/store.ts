import { configureStore } from "@reduxjs/toolkit";
import dateReducer from "./dateSlice";
import latitudeReducer from "./latitudeSlice";
import longitudeReducer from "./longitudeSlice";
import pmReducer from "./pmSlice";

export const store = configureStore({
    reducer: {
        date: dateReducer,
        lat: latitudeReducer,
        long: longitudeReducer,
        pm: pmReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch