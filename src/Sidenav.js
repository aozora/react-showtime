import React from 'react';

const Sidenav = () => {
  return (
    <nav>
      <ul className="spectrum-SideNav">
        <li className="spectrum-SideNav-item is-selected">
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a href="#" className="spectrum-SideNav-itemLink" aria-current="page">
            Section Title 1
          </a>
        </li>
        <li className="spectrum-SideNav-item is-disabled">
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a href="#" className="spectrum-SideNav-itemLink">
            Section Title 2
          </a>
        </li>
        <li className="spectrum-SideNav-item">
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a href="#" className="spectrum-SideNav-itemLink">
            Section Title 3
          </a>
        </li>
        <li className="spectrum-SideNav-item">
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a href="#" className="spectrum-SideNav-itemLink">
            Section Title 4
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Sidenav;
