import React from 'react';
import { Link } from 'react-router-dom';

const Page404 = () => {
  return (
    <>
      <div>Page not found</div>
      <Link to="/">Go to the home page</Link>
    </>
  );
};

export default Page404;
