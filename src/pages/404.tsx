import React from 'react';
import { Link } from 'gatsby';

/**
 * App 404 page
 */
const NotFound = () => {
  return (
    <>
      <h1>Page not found!</h1>
      <p>
        Oops! The requested page does not exist go <Link to="/">Home</Link>
      </p>
    </>
  );
};

export default NotFound;
