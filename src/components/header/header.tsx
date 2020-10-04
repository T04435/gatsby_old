import React from 'react';
import { Link } from 'gatsby';

import styles from './header.module.scss';

type Links = Array<{ label: string; path: string; target?: string }>;

interface ILogo {
  url: string;
  alt: string;
}

/** props for the header component */
export interface IHeaderProps {
  /** logo to be displayed in the header */
  logo: ILogo;
  /** links to show in the header */
  links: Links;
}

/**
 * A header component which displays a logo and links
 */
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
