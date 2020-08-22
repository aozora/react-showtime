import React from 'react';
import { APP_TITLE } from '../lib/constants';
import Spinner from './Spinner';

const Splash = () => {
  return (
    <article className="splash">
      <h1>{APP_TITLE}</h1>
      <h2>Loading...</h2>
      {/* <Spinner /> */}
    </article>
  );
};

export default Splash;
