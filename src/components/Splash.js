import React from 'react';
import Spinner from './Spinner';

const Splash = () => {
  return (
    <article className="splash">
      <h1>Spectrum Demo</h1>
      <h2>Loading...</h2>
      <Spinner />
    </article>
  );
};

export default Splash;
