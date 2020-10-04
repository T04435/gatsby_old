import React from 'react';
import Header, { IHeaderProps } from './header';
import { Meta } from '@storybook/react';

export default {
  title: 'components/header',
  component: Header,
} as Meta;

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

export const base = () => <Header {...headerProps} />;
