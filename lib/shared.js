import { format, parseISO, compareDesc } from 'date-fns';

export const mediaType = {
  all: 'all',
  movie: 'movie',
  tv: 'tv',
  person: 'person'
};

export const cardType = {
  poster: 'poster',
  backdrop: 'backdrop'
};

export const movieCategory = {
  upcoming: 'upcoming',
  topRated: 'top-rated',
  nowPlaying: 'now-playing',
  latest: 'latest',
  popular: 'popular'
};

export const tvCategory = {
  popular: 'popular',
  topRated: 'top-rated',
  onTheAir: 'on-the-air',
  onTheAirToday: 'on-the-air-today',
  latest: 'latest'
};

export const mediaListType = {
  videos: 'videos',
  posters: 'posters',
  backdrops: 'backdrops',
  profiles: 'profiles'
};

export const timeWindow = {
  day: 'day',
  week: 'week'
};

export const formatDate = date => {
  try {
    const d = parseISO(date);
    return format(d, 'MMM d, yyyy');
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err);
    return date;
  }
};

export const getYearDate = date => {
  try {
    const d = parseISO(date);
    return format(d, 'yyyy');
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err);
    // eslint-disable-next-line no-console
    console.error(date);
    return date;
  }
};

/**
 * Compare 2 dates
 *
 * @param a
 * @param b
 * @returns {number} Return -1 if the first date is after the second,
 *                    1 if the first date is before the second
 *                    or 0 if dates are equal.
 */
export const compareCastReleaseDatesDesc = (a, b) => {
  return compareDesc(parseISO(a.release_date), parseISO(b.release_date));
};

export const getRandomInt = max => {
  return Math.floor(Math.random() * Math.floor(max));
};
