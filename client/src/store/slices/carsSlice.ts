import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../api";
import type { Car } from "../../types";

export const fetchCars = createAsyncThunk("cars/fetchCars", async () => {
  const response = await api.get("/cars");
  return response.data;
});

const carsSlice = createSlice({
  name: "cars",
  initialState: {
    items: [] as Car[],
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCars.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCars.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
      });
  },
});

export default carsSlice.reducer;
