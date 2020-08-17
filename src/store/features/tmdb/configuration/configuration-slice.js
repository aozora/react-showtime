/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  api: {},
  translations: [],
  languages: [],
  countries: [],
  jobs: [],
  timezones: [],
  genres: {
    movies: [],
    tv: []
  }
};

const configurationSlice = createSlice({
  name: 'configuration',
  initialState,
  reducers: {
    setApiConfiguration(state, action) {
      state.api = action.payload;
    },
    setTranslations(state, action) {
      state.translations = action.payload;
    },
    setLanguages(state, action) {
      state.languages = action.payload;
    },
    setCountries(state, action) {
      state.countries = action.payload;
    },
    setJobs(state, action) {
      state.jobs = action.payload;
    },
    setTimezones(state, action) {
      state.timezones = action.payload;
    },
    setGenresMovies(state, action) {
      state.genres.movies = action.payload;
    },
    setGenresTv(state, action) {
      state.genres.tv = action.payload;
    }
  }
});

export const {
  setApiConfiguration,
  setTranslations,
  setLanguages,
  setCountries,
  setJobs,
  setTimezones,
  setGenresMovies,
  setGenresTv
} = configurationSlice.actions;

// Thunks
export const setApiConfigurationAsync = () => dispatch => {
  dispatch(setApiConfiguration);
};

export default configurationSlice.reducer;
