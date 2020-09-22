import React from 'react';
import Header from '../components/header';
import * as styles from './index.module.scss';
import SEO from '../components/seo/seo';

interface IAppProps {
  /** App title */
  title: string;
}

/**
 * Main App
 */
const App = (props: IAppProps) => {
  const { title } = props;
  /** render component */
  return (
    <>
      <SEO title="Home" />
      <Header
        logo={{ url: '#', alt: 'Logo' }}
        links={[
          { path: '/', label: 'link1' },
          { path: '/', label: 'link2' },
        ]}
      />
      <main className={styles.app}>
        <h1>Hello world!{title}</h1>
      </main>
    </>
  );
};

export default App;
