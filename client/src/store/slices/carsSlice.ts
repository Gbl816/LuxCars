import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCars = createAsyncThunk("cars/fetchCars", async () => {
  const response = await axios.get("http://localhost:4000/api/cars");
  return response.data;
});

const carsSlice = createSlice({
  name: "cars",
  initialState: {
    items: [],
    loading: false,
  } as { items: any[]; loading: boolean },
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
