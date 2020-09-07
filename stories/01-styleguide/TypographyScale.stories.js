import React, { Fragment } from 'react';

const Scale = ({ fontFamily, fontWeight, lineHeight, scales }) => {
  return (
    <article>
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
          <div style={{ flex: '0 0 auto' }}>{scale}</div>
          <div
            style={{
              flex: '1 1 auto',
              padding: '.5rem',
              fontFamily,
              fontSize: `var(${scale})`,
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
    '--text-scale-1',
    '--text-scale-2',
    '--text-scale-3',
    '--text-scale-4',
    '--text-scale-5',
    '--text-scale-6'
  ]
};
