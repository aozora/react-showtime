import React, { Fragment } from 'react';

const Scale = ({ fontFamily, fontWeight, lineHeight, scales }) => {
  return (
    <article>
      <header>
        <h1>Was he a beast if music could move him so?</h1>
        <h2>Was he a beast if music could move him so?</h2>
        <h3>Was he a beast if music could move him so?</h3>
        <h4>Was he a beast if music could move him so?</h4>
        <h5>Was he a beast if music could move him so?</h5>
        <h6>Was he a beast if music could move him so?</h6>
      </header>

      {scales.map((scale, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <div
          key={index}
          style={{
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            width: '100%',
            padding: '.5rem'
          }}
        >
          <div style={{ flex: '0 0 auto', fontSize: '.6rem', padding: '.5rem' }}>{scale.min}</div>
          <div style={{ flex: '0 0 auto', fontSize: '.6rem', padding: '.5rem' }}>
            {scale.target}
          </div>
          <div style={{ flex: '0 0 auto', fontSize: '.6rem', padding: '.5rem' }}>{scale.max}</div>
          <div
            style={{
              flex: '1 1 auto',
              padding: '.5rem',
              fontFamily,
              fontSize: `clamp(${scale.min}, ${scale.target}, var(${scale.max}))`,
              fontWeight,
              lineHeight
            }}
          >
            Was he a beast if music could move him so?
          </div>
        </div>
      ))}
    </article>
  );
};

export default {
  title: 'Styleguide/Typography Scale',
  component: Scale
};

const Template = args => <Scale {...args} />;

export const Scales = Template.bind({});
Scales.args = {
  fontFamily: '"Inter", serif',
  fontWeight: 400,
  lineHeight: 'var(--baseline)',
  scales: [
    { min: '18px', target: '2vw', max: '--text-scale-1' },
    { min: '22.5px', target: '2vw', max: '--text-scale-2' },
    { min: '28.125px', target: '2vw', max: '--text-scale-3' },
    { min: '35.15px', target: '2vw', max: '--text-scale-4' },
    { min: '43.94px', target: '2vw', max: '--text-scale-5' },
    { min: '30px', target: '5.5vw', max: '--text-scale-6' }
  ]
};
