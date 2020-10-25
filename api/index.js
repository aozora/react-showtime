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

/**
 * Check if the given url contains the "language" parameter, if so return the url with the proper locale
 * @param url
 * @param locale
 * @returns {*}
 */
export const getUrlWithLanguage = (url, locale) => {
  if (url.indexOf('language') > -1 || url.indexOf('include_image_language') > -1) {
    return url.replace('LOCALE', locale);
  }

  return url;
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
  youtubeTrailer: 'https://www.youtube.com/watch?v=YOUTUBEKEY',
  youtubePoster: 'https://img.youtube.com/vi/YOUTUBEKEY/hqdefault.jpg',
  youtubePosterMaxRes: 'https://img.youtube.com/vi/YOUTUBEKEY/maxresdefault.jpg',

  // search
  // ------------------------------------------------------------
  search: `https://api.themoviedb.org/3/search/multi?language=LOCALE&query=KEYWORD&page=1&include_adult=false`,

  // movies
  // ------------------------------------------------------------
  movieCertifications: `https://api.themoviedb.org/3/certification/movie/list`,
  moviesGenres: `https://api.themoviedb.org/3/genre/movie/list?language=LOCALE`,
  movieDetails: `https://api.themoviedb.org/3/movie/MOVIE_ID?include_image_language=LOCALE,en,null&append_to_response=videos,images`,
  movieCredits: `https://api.themoviedb.org/3/movie/MOVIE_ID/credits`,
  movieKeywords: 'https://api.themoviedb.org/3/movie/MOVIE_ID/keywords',
  movieReleaseDates: 'https://api.themoviedb.org/3/movie/MOVIE_ID/release_dates',

  // movie collections
  trending: `https://api.themoviedb.org/3/trending/MEDIA_TYPE/TIME_WINDOW`,
  latestMovie: `https://api.themoviedb.org/3/movie/latest?language=LOCALE`,
  movieTopRated: `https://api.themoviedb.org/3/movie/top_rated?language=LOCALE&page=1`,
  movieNowPlaying: `https://api.themoviedb.org/3/movie/now_playing?language=LOCALE&page=1`,
  movieUpcoming: `https://api.themoviedb.org/3/movie/upcoming?language=LOCALE&page=1`,
  moviePopular: `https://api.themoviedb.org/3/movie/popular?language=LOCALE&page=1`,

  // movie related
  movieSimilar: `https://api.themoviedb.org/3/movie/MOVIE_ID/similar`,
  movieLists: `https://api.themoviedb.org/3/movie/MOVIE_ID/lists`,

  // discover
  movieDiscover: '/discover/movie?language=LOCALE',

  // tv series
  // ------------------------------------------------------------
  tvCredits: `https://api.themoviedb.org/3/tv/TV_ID/credits`,
  tvCertifications: `https://api.themoviedb.org/3/certification/tv/list`,
  tvGenres: `https://api.themoviedb.org/3/genre/tv/list?language=LOCALE`,
  tvDetails: `https://api.themoviedb.org/3/tv/TV_ID?append_to_response=videos,images`,
  tvKeywords: 'https://api.themoviedb.org/3/tv/TV_ID/keywords',
  tvLatest: `https://api.themoviedb.org/3/tv/latest?language=LOCALE`,

  // tv collections
  tvTopRated: `https://api.themoviedb.org/3/tv/top_rated?language=LOCALE&page=1`,
  tvPopular: `https://api.themoviedb.org/3/tv/popular?language=LOCALE&page=1`,
  tvOnTheAir: `https://api.themoviedb.org/3/tv/on_the_air?language=LOCALE&page=1`,
  tvOnTheAirToday: `https://api.themoviedb.org/3/tv/airing_today?language=LOCALE&page=1`,

  tvSeasons: 'https://api.themoviedb.org/3/tv/TV_ID/season/SEASON_NUMBER?language=LOCALE&page=1',

  // discover
  tvDiscover: '/discover/tv?language=LOCALE',

  // people
  // ------------------------------------------------------------
  peopleDetails: `https://api.themoviedb.org/3/person/PERSON_ID?language=LOCALE&append_to_response=videos,images`,
  peopleCombinedCredits: `https://api.themoviedb.org/3/person/PERSON_ID/combined_credits?language=LOCALE`
};
