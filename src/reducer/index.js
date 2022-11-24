import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  movieName: "",
  movieData: [],
  filteredMovieData: []
};

export const movieSlice = createSlice({
  name: "movie",
  initialState: initialState,
  reducers: {
    getMovieName: (state, { payload }) => {
      state.movieName = payload;
    },
    getMovieList:(state, {payload}) => {
      // return {...state, movieData: payload.map((item) => item.page["content-items"].content)}
      const movieData1 = payload.map((item) => item.page["content-items"].content)
      state.movieData = movieData1;
    },
    getFilteredMovies:(state, {payload}) => {
      const userInput = payload.toLowerCase();
      // return {...state, filteredMovieData: state.movieData.map((item) => item.filter((item1) => item1.name.toLowerCase().includes(userInput)))}
      const filteredData = state.movieData.map((item) => item.filter((item1) => item1.name.toLowerCase().includes(userInput)))
      state.filteredMovieData = filteredData;
    }
  },
});

export const { getMovieName, getMovieList, getFilteredMovies } = movieSlice.actions;

export default movieSlice.reducer;
