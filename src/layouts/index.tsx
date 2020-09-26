import React, { ReactNode } from 'react';
import Layout from '../components/layout/layout';

class Index extends React.Component<{ children: any }> {
  render() {
    const { children } = this.props;
    return <Layout>{children}</Layout>;
  }
}

export default Index;
