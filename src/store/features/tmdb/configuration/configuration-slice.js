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
  },

  content: {
    menu: null,
    languages: [],
    countries: [],
    movieGenres: [],

    // volatile content
    movieTopRated: {}, // first 20 results
    movieUpcoming: [], // first 20 results
    tvTopRated: [], // first 20 results
    appLoader: [] // first 20 results
  }
};

const issuesDisplaySlice = createSlice({
  name: 'issuesDisplay',
  initialState,
  reducers: {
    displayRepo(state, action) {
      const { org, repo } = action.payload;
      state.org = org;
      state.repo = repo;
    },
    setCurrentPage(state, action) {
      state.page = action.payload;
    },
    setCurrentDisplayType(state, action) {
      const { displayType, issueId = null } = action.payload;
      state.displayType = displayType;
      state.issueId = issueId;
    }
  }
});

export const { displayRepo, setCurrentDisplayType, setCurrentPage } = issuesDisplaySlice.actions;

export default issuesDisplaySlice.reducer;
