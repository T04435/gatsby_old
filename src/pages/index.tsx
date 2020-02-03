import * as React from 'react';
import { ReactChild } from 'react';

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
    return <div>Hello world!{this.props.title}</div>;
  }
}

