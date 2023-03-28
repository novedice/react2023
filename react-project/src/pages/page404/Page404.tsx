import React from 'react';
import { Link } from 'react-router-dom';

class Page404 extends React.Component {
  render(): React.ReactNode {
    return (
      <>
        <div>Page not found</div>
        <Link to="/">Go to the home page</Link>
      </>
    );
  }
}

export default Page404;
