import { storiesOf } from '@storybook/react';
import { Header, IHeaderProps } from './header';
import React from 'react';

const headerProps: IHeaderProps = {
  logo: {
    url: 'fake',
    alt: 'indeed fake image',
  },
  links: [
    {
      label: 'lorem',
      path: '/about',
    },
  ],
};

storiesOf('Header', module).add('Default', () => <Header {...headerProps} />);
