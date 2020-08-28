import { format, parse } from 'date-fns';

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
  const d = parse(date, 'yyyy-MM-dd', new Date());
  return format(d, 'MMM d, yyyy');
};
