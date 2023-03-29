import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { LayoutProps } from '../../types';
import './layout.css';

const Layout = ({ state, setState }: LayoutProps) => {
  // state: ActiveState;

  // constructor(props: LayoutProps) {
  //   super(props);
  //   this.state = props.state;
  //   this.activeMainHandle = this.activeMainHandle.bind(this);
  //   this.activeAboutHandle = this.activeAboutHandle.bind(this);
  //   this.activeFormHandle = this.activeFormHandle.bind(this);
  // }

  const activeMainHandle = () => {
    setState({ main: 'active', about: '', form: '' });
  };

  const activeAboutHandle = () => {
    setState({ main: '', about: 'active', form: '' });
  };

  const activeFormHandle = () => {
    setState({ main: '', about: '', form: 'active' });
  };

  return (
    <>
      <header className="header-wrap">
        <Link to="/" className={`unlink ${state.main}`} onClick={activeMainHandle}>
          main
        </Link>
        <Link to="/about" className={`unlink ${state.about}`} onClick={activeAboutHandle}>
          about us
        </Link>
        <Link to="/form" className={`unlink ${state.form}`} onClick={activeFormHandle}>
          form
        </Link>
      </header>
      <Outlet />
      <footer className="footer-wrap">2023</footer>
    </>
  );
};

export default Layout;
