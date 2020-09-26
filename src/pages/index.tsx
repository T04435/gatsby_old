import React from 'react';

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
      <h1>Hello world!{title}</h1>
    </>
  );
};

export default App;
