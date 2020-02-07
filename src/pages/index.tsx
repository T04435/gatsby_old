import * as React from 'react';
import { ReactChild } from 'react';
import * as styles from './index.module.scss';
import { Header } from '../components/header';

interface IAppProps {
  /** App title */
  title: string;
}

/**
 * Main App
 */
export default class App extends React.Component<IAppProps, {}> {
  /** render component */
  render(): ReactChild {
    return (
      <>
        <Header
          logo={{ url: '#', alt: 'Logo' }}
          links={[
            { path: '/', label: 'link1' },
            { path: '/', label: 'link2' },
          ]}
        />
        <main className={styles.app}>
          <h1>Hello world!{this.props.title}</h1>
        </main>
      </>
    );
  }
}
