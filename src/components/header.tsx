import React from 'react';

export interface IHeaderProps {
  logo: {
    url: string;
    alt: string;
  };
  links: Array<{ label: string; path: string }>;
}

const Header = (props: IHeaderProps) => {
  const { links, logo } = props;
  return (
    <nav>
      <a className="logo" href={logo.url}>{logo.alt}</a>
      {links.map(l => (
        <a href={l.path}>{l.label}</a>
      ))}
    </nav>
  );
};

export default Header;