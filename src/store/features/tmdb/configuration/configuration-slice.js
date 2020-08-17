/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  api: {
    key: process.env.REACT_APP_TMDB_KEY,
    configuration: {}
    // url: {
    //   configuration: `https://api.themoviedb.org/3/configuration?api_key=${process.env.REACT_APP_TMDB_KEY}`,
    //   languages: `https://api.themoviedb.org/3/configuration/languages?api_key=${process.env.REACT_APP_TMDB_KEY}`,
    //   countries: `https://api.themoviedb.org/3/configuration/countries?api_key=${process.env.REACT_APP_TMDB_KEY}`,
    //   images: 'https://image.tmdb.org/t/p/',
    //   youtubeEmbed: 'https://www.youtube.com/embed/',
    //   youtubeTrailer: 'https://www.youtube.com/watch?v=',
    //   youtubePoster: 'https://img.youtube.com/vi/YOUTUBEKEY/hqdefault.jpg',
    //   youtubePosterMaxRes:
    //     'https://img.youtube.com/vi/YOUTUBEKEY/maxresdefault.jpg',
    //   search: `https://api.themoviedb.org/3/search/multi?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&query=KEYWORD&page=1&include_adult=false`,
    //
    //   // movies
    //   // ------------------------------------------------------------
    //   movieCertifications: `https://api.themoviedb.org/3/certification/movie/list?api_key=${process.env.REACT_APP_TMDB_KEY}`,
    //   moviesGenres: `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US`,
    //   movieDetails: `https://api.themoviedb.org/3/movie/MOVIE_ID?api_key=${process.env.REACT_APP_TMDB_KEY}&include_image_language=en&append_to_response=videos,images`,
    //   movieCredits: `https://api.themoviedb.org/3/movie/MOVIE_ID/credits?api_key=${process.env.REACT_APP_TMDB_KEY}`,
    //
    //   // trending: https://developers.themoviedb.org/3/trending/get-trending
    //   trending: `https://api.themoviedb.org/3/trending/TYPE/TIME?api_key=${process.env.REACT_APP_TMDB_KEY}`,
    //
    //   // movie collections
    //   // latestMovie: `https://api.themoviedb.org/3/movie/latest?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US`,
    //   movieTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`,
    //   movieNowPlaying: `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`,
    //   movieUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`,
    //   moviePopular: `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`,
    //
    //   // movie related
    //   movieSimilar: `https://api.themoviedb.org/3/movie/MOVIE_ID/similar?api_key=${process.env.REACT_APP_TMDB_KEY}`,
    //   movieLists: `https://api.themoviedb.org/3/movie/MOVIE_ID/lists?api_key=${process.env.REACT_APP_TMDB_KEY}`,
    //
    //   // tv series
    //   // ------------------------------------------------------------
    //   tvCertifications: `https://api.themoviedb.org/3/certification/tv/list?api_key=${process.env.REACT_APP_TMDB_KEY}`,
    //   tvGenres: `https://api.themoviedb.org/3/genre/tv/list?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US`,
    //   tvDetails: `https://api.themoviedb.org/3/tv/TV_ID?api_key=${process.env.REACT_APP_TMDB_KEY}&append_to_response=videos,images`,
    //
    //   tvLatest: `https://api.themoviedb.org/3/tv/latest?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US`,
    //   tvTopRated: `https://api.themoviedb.org/3/tv/top_rated?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`,
    //   tvPopular: `https://api.themoviedb.org/3/tv/popular?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`,
    //   tvOnTheAir: `https://api.themoviedb.org/3/tv/on_the_air?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`,
    //   tvOnTheAirToday: `https://api.themoviedb.org/3/tv/airing_today?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`,
    //
    //   // people
    //   // ------------------------------------------------------------
    //   peopleDetails: `https://api.themoviedb.org/3/person/PERSON_ID?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US`,
    //   peopleCredits: `https://api.themoviedb.org/3/person/PERSON_ID/combined_credits?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US`
    // }
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
