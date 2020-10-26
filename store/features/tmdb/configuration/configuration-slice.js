/* eslint-disable no-param-reassign */
import { createSlice, createSelector } from '@reduxjs/toolkit';

const initialState = {
  api: {},
  translations: [],
  languages: [],
  countries: [],
  jobs: [],
  timezones: [],

  // genres doesn't belong within the configuration api, however since they are 2 lists used everywhere
  // we keep them in this configuration slice
  genres: {
    movies: [],
    tv: []
  },
  certifications: {
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
    },
    setMoviesCertifications(state, action) {
      state.certifications.movies = action.payload;
    },
    setTvCertifications(state, action) {
      state.certifications.tv = action.payload;
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
  setGenresTv,
  setMoviesCertifications,
  setTvCertifications
} = configurationSlice.actions;

// ***************************************
//    THUNKS
// ***************************************
export const setApiConfigurationAsync = data => dispatch => {
  dispatch(setApiConfiguration(data));
};

// ***************************************
//    SELECTORS
// ***************************************
const slice = state => state.configuration;
export const selectConfigurationImagesBackdropSizes = createSelector(
  slice,
  state => state.api.images.backdrop_sizes
);
export const selectConfigurationImagesPosterSizes = createSelector(
  slice,
  state => state.api.images.poster_sizes
);
export const selectConfigurationImagesProfileSizes = createSelector(
  slice,
  state => state.api.images.profile_sizes
);
export const selectConfigurationImagesSecureBaseUrl = createSelector(
  slice,
  state => state.api.images.secure_base_url
);

export const selectConfigurationLanguages = createSelector(slice, state => state.languages);
export const selectConfigurationCountries = createSelector(slice, state => state.countries);
export const selectConfigurationMovieCertifications = createSelector(
  slice,
  state => state.certifications.movies
);
export const selectConfigurationTvCertifications = createSelector(
  slice,
  state => state.certifications.tv
);

export const selectConfigurationMovieGenres = createSelector(
  slice,
  state => state.genres.movies.genres
);

export const selectConfigurationTvGenres = createSelector(slice, state => state.genres.tv.genres);

export default configurationSlice.reducer;
