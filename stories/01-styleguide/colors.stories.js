import React from 'react';

const colors = [
  { v: '--color-primary', hex: '#FA9E27', text: 'Primary' },
  { v: '--color-secondary', hex: '#1D2125', text: 'Secondary' },
  { v: '--color-black', hex: '#000000', text: 'Black' },
  { v: '--color-white', hex: '#FFFFFF', text: 'White' },
  { v: '--color-light', hex: '#FFE6CB', text: 'Light' },
  { v: '--color-dark-gray', hex: '#0C1115', text: 'Dark gray' },
  { v: '--color-gray', hex: '#606065', text: 'Gray' },
  { v: '--color-light-gray', hex: '#f6f6f6', text: 'Light gray' }
];

const ColorBlock = ({ colors }) => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
      flexWrap: 'wrap',
      width: '100%'
    }}
  >
    {colors.map(color => (
      <p
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '150px',
          height: '150px',
          marginRight: '1rem',
          backgroundColor: `${color.hex}`,
          color: '#fff',
          textShadow: '1px 1px 0 #000'
        }}
        key={color.v}
      >
        {color.text}
        <br />
        {color.hex}
        <br />
        {color.v}
      </p>
    ))}
  </div>
);

const ColorSwatches = () => (
  <article style={{ padding: '15px', lineHeight: '1.4' }}>
    <h1>
      <strong>Colors</strong>
    </h1>
    <ColorBlock colors={colors} />
  </article>
);

export default {
  title: 'Styleguide/Colors',
  component: ColorSwatches
};

export const Colors = () => <ColorSwatches />;
