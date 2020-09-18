import { Header, IHeaderProps } from './header';
import React from 'react';

export default {
  title: 'header',
  component: Header,
}

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
