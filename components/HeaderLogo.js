import React from 'react';

const HeaderLogo = ({ children, isHome }) => {
  if (isHome) {
    return <h1>{children}</h1>;
  }

  return <div>{children}</div>;
};

export default HeaderLogo;
