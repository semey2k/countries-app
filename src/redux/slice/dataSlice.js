import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchCountries = createAsyncThunk('country/fetchCountries', async (country) => {
  const { data } = await axios.get('data.json');
  return country ? data.filter((el) => el.region == country) : data;
});

export const fetchSearch = createAsyncThunk('country/fetchSearch', async (value) => {
  const { data } = await axios.get('data.json');
  return data.filter(el => {return (el.name.toLowerCase().includes(value.toLowerCase()))})
});

export const fetchCountry = createAsyncThunk('country/fetchCountry', async (value) => {
  const { data } = await axios.get('data.json');
  return data.filter(el => el.name === value)
});



const dataSlice = createSlice({
  name: 'country',
  initialState: {
    countries: [],
    region: [],
    status: 'loading',
  },
  reducers: {
    getDataByRegion(state, action) {
      state.region = state.countries?.filter((country) => country.region == action.payload);
    },
  },
  extraReducers: {
    [fetchCountries.pending]: (state) => {
      state.countries = [];
      state.status = 'loading';
    },
    [fetchCountries.fulfilled]: (state, action) => {
      state.countries = action.payload;
      state.status = 'loaded';
    },

    [fetchSearch.pending]: (state) => {
      state.countries = [];
      state.status = 'loading';
    },
    [fetchSearch.fulfilled]: (state, action) => {
      state.countries = action.payload;
      state.status = 'loaded';
    },

    [fetchCountry.pending]: (state) => {
      state.countries = [];
      state.status = 'loading';
    },
    [fetchCountry.fulfilled]: (state, action) => {
      state.countries = action.payload;
      state.status = 'loaded';
    },
  },
});

export const { getDataByRegion } = dataSlice.actions;

export default dataSlice.reducer;
