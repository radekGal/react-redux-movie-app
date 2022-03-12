import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`;

export const fetchMoviesData = createAsyncThunk(
  'movies/fetchMoviesData',
  async (title) => {
    const {data} = await axios.get(`${API_URL}&s=${title}&type=movie`);
    return data.Search
  }
);

const initialState = {
  movies: [],
  loading: false,
};

const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchMoviesData.pending](state) {
      return {
        ...state,
        loading: true
      }
    },
    [fetchMoviesData.fulfilled](state, { payload }) {
      state.loading = false;
      state.movies = payload;
    },
    [fetchMoviesData.rejected](state, { payload }) {
      return {
        ...state,
        loading: false
      }
    }
  }
});


export const getMovies = state => state.movies.movies;
export default movieSlice.reducer;

