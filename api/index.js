/* eslint-disable import/prefer-default-export */

export const fetcher = async url => {
  const res = await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_ACCESS_TOKEN}`
    }
  });
  return res.json();
};

export const URL = {
  configuration: 'https://api.themoviedb.org/3/configuration',
  languages: 'https://api.themoviedb.org/3/configuration/languages',
  countries: 'https://api.themoviedb.org/3/configuration/countries',
  jobs: 'https://api.themoviedb.org/3/configuration/jobs',
  timezones: 'https://api.themoviedb.org/3/configuration/timezones',
  primaryTranslations: 'https://api.themoviedb.org/3/configuration/primary_translations',

  images: 'https://image.tmdb.org/t/p/',
  youtubeEmbed: 'https://www.youtube.com/embed/',
  youtubeTrailer: 'https://www.youtube.com/watch?v=',
  youtubePoster: 'https://img.youtube.com/vi/YOUTUBEKEY/hqdefault.jpg',
  youtubePosterMaxRes: 'https://img.youtube.com/vi/YOUTUBEKEY/maxresdefault.jpg',
  search: `https://api.themoviedb.org/3/search/multi?language=en-US&query=KEYWORD&page=1&include_adult=false`,

  // movies
  // ------------------------------------------------------------
  movieCertifications: `https://api.themoviedb.org/3/certification/movie/list`,
  moviesGenres: `https://api.themoviedb.org/3/genre/movie/list?language=en-US`,
  movieDetails: `https://api.themoviedb.org/3/movie/MOVIE_ID?include_image_language=en&append_to_response=videos,images`,
  movieCredits: `https://api.themoviedb.org/3/movie/MOVIE_ID/credits`,

  // trending: https://developers.themoviedb.org/3/trending/get-trending
  trending: `https://api.themoviedb.org/3/trending/TYPE/TIME`,

  // movie collections
  // latestMovie: `https://api.themoviedb.org/3/movie/latest?language=en-US`,
  movieTopRated: `https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1`,
  movieNowPlaying: `https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1`,
  movieUpcoming: `https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1`,
  moviePopular: `https://api.themoviedb.org/3/movie/popular?language=en-US&page=1`,

  // movie related
  movieSimilar: `https://api.themoviedb.org/3/movie/MOVIE_ID/similar`,
  movieLists: `https://api.themoviedb.org/3/movie/MOVIE_ID/lists`,

  // tv series
  // ------------------------------------------------------------
  tvCertifications: `https://api.themoviedb.org/3/certification/tv/list`,
  tvGenres: `https://api.themoviedb.org/3/genre/tv/list?language=en-US`,
  tvDetails: `https://api.themoviedb.org/3/tv/TV_ID?append_to_response=videos,images`,

  tvLatest: `https://api.themoviedb.org/3/tv/latest?language=en-US`,
  tvTopRated: `https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1`,
  tvPopular: `https://api.themoviedb.org/3/tv/popular?language=en-US&page=1`,
  tvOnTheAir: `https://api.themoviedb.org/3/tv/on_the_air?language=en-US&page=1`,
  tvOnTheAirToday: `https://api.themoviedb.org/3/tv/airing_today?language=en-US&page=1`,

  // people
  // ------------------------------------------------------------
  peopleDetails: `https://api.themoviedb.org/3/person/PERSON_ID?language=en-US`,
  peopleCredits: `https://api.themoviedb.org/3/person/PERSON_ID/combined_credits?language=en-US`
};
