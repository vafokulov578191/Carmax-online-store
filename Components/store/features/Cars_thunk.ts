import {
    createAsyncThunk
} from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCars = createAsyncThunk(
    'cars/fetchCars',
    async () => {
        const { data } = await axios.get('http://localhost:3001/cars')
        return data
    }
)

export const addCars = createAsyncThunk(
    'cars/addCars',
    async (db) => {
        const { data } = await axios.post('http://localhost:3001/cars', db)
        return data
    }
)

export const removeCars = createAsyncThunk(
    'cars/removeCars',
    async (id) => {
        const { data } = await axios.delete(`http://localhost:3001/cars/${id}`)
        return data
    }
)

export const editCars = createAsyncThunk(
    'cars/editCars',
    async (id) => {
        const { data } = await axios.patch(`http://localhost:3001/cars/${id}`, {
            name: "Alex"
        })
        return data
    }
)

