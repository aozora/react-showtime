import { format, parseISO, compareDesc } from 'date-fns';

export const mediaType = {
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

export const formatDate = date => {
  // const d = parse(date, 'yyyy-MM-dd', new Date());
  const d = parseISO(date);
  return format(d, 'MMM d, yyyy');
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
