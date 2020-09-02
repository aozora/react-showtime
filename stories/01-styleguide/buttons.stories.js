import React from 'react';
import Button from '../../components/Button';

export default {
  title: 'Styleguide/Buttons',
  component: Button
};

// eslint-disable-next-line react/jsx-props-no-spreading
const Template = args => <Button {...args}>{args.label}</Button>;

export const Primary = Template.bind({});
Primary.args = {
  className: 'button--primary',
  label: 'Primary'
};

export const PrimaryFocused = Template.bind({});
PrimaryFocused.args = {
  className: 'button--primary button--focus-ring',
  label: 'Primary with focus'
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Secondary'
};

export const SecondaryFocused = Template.bind({});
SecondaryFocused.args = {
  className: 'button--focus-ring',
  label: 'Secondary with focus'
};
