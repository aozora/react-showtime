import React from 'react';
import { CategorySwitch as Switch } from '../../components/CategorySwitch';
import { timeWindow } from '../../lib/shared';

export default {
  title: 'Components/CategorySwitch',
  component: Switch
  // argTypes: { onChange: { action: 'changed' } }
};

const radios = [
  { label: 'Today', value: timeWindow.day },
  {
    label: 'This week',
    value: timeWindow.week
  }
];

const Template = args => <Switch {...args} />;
export const Default = Template.bind({});
Default.args = {
  label: 'Trending',
  initialValue: timeWindow.day,
  radios,
  onChange: { action: 'changed' }
};
