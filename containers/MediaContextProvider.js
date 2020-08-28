import React from 'react';
import { mediaType } from '../lib/shared';

export const MediaContext = React.createContext(mediaType.movie);

const MediaContextProvider = ({ children, type }) => {
  return <MediaContext.Provider value={type}>{children}</MediaContext.Provider>;
};

export default MediaContextProvider;
