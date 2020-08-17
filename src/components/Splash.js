import React from 'react';
import { Content, ProgressCircle, Heading } from '@adobe/react-spectrum';

const Splash = () => {
  return (
    <Content className="splash">
      <Heading level={1}>Spectrum Demo</Heading>
      <Heading level={2}>Loading...</Heading>
      <ProgressCircle aria-label="Loading…" isIndeterminate />
    </Content>
  );
};

export default Splash;
