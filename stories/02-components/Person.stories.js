import React from 'react';
import Person from '@/components/Person';
import { withProvider } from '../story-redux-helper';

export default {
  title: 'Components/Person',
  component: Person,
  decorators: [Story => withProvider(Story)]
};

const Template = args => <Person {...args} />;

export const WithImage = Template.bind({});
WithImage.args = {
  person: {
    character: 'Daenerys Targaryen',
    credit_id: '5256c8af19c2956ff60479f6',
    id: 1223786,
    name: 'Emilia Clarke',
    gender: 1,
    profile_path: '/86jeYFV40KctQMDQIWhJ5oviNGj.jpg',
    order: 0
  }
};

export const WithPlaceholder = Template.bind({});
WithPlaceholder.args = {
  person: undefined
};
