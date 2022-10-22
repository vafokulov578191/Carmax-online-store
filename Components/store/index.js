import { configureStore } from "@reduxjs/toolkit";
import Carsslice from "./features/Carsslice";

export const store = configureStore({
    reducer: Carsslice
})
