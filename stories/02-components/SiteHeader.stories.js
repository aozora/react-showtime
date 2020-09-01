import React from 'react';
import { withNextRouter } from 'storybook-addon-next-router';
import SiteHeader from '../../components/SiteHeader';

export default {
  title: 'Components/SiteHeader',
  component: SiteHeader,
  decorators: [withNextRouter]
};

export const Header = () => <SiteHeader />;
