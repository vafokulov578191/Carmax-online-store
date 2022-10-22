import {
    createSlice
} from "@reduxjs/toolkit";
import {
    fetchCars
} from "./Cars_thunk";

export const Carsslice = createSlice({
    name: 'cars',
    initialState: {
        data: [],
        status: 'idle'
    },
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(fetchCars.pending, (state, action) => {
                state.status = 'loading...'
            })
            .addCase(fetchCars.fulfilled, (state, action) => {
                state.status = 'success'
                state.data = action.payload
            })
            .addCase(fetchCars.rejected, (state, action) => {
                state.status = 'error'
            })
    }
})

export default Carsslice.reducer