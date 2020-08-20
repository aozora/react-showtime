import React from 'react';

const HeaderLogo = ({ children, isHome }) => {
  if (isHome) {
    return <h1 className="menu__logo">{children}</h1>;
  }

  return <div className="menu__logo">{children}</div>;
};

export default HeaderLogo;
