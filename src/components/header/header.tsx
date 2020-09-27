import React from 'react';
import { Link } from 'gatsby';

import styles from './header.module.scss';

export interface IHeaderProps {
  logo: {
    url: string;
    alt: string;
  };
  links: Array<{ label: string; path: string; target?: string }>;
}

const Header = (props: IHeaderProps) => {
  const { links, logo } = props;

  return (
    <header className={styles.header}>
      <Link to="/" className={styles.logo}>
        <img src={logo.url} alt={logo.alt} loading="lazy" />
      </Link>
      <nav className={styles.nav}>
        {links.map((l) =>
          l.target ? (
            <a
              href={l.path}
              target={l.target}
              className={styles.navItem}
              key={l.path}
              rel="noreferrer"
            >
              {l.label}
            </a>
          ) : (
            <Link to={l.path} key={l.path} className={styles.navItem}>
              {l.label}
            </Link>
          )
        )}
      </nav>
    </header>
  );
};

export default Header;
