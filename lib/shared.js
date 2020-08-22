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

export const formatDate = date => {
  const d = parse(date, 'yyyy-MM-dd', new Date());
  return format(d, 'MMM d, yyyy');
};
