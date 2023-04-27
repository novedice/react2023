import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './layout.css';
import { useAppDispatch, useTypeSelector } from '../../hooks/useAppDispatch';
import { ACTIVE_ABOUT, ACTIVE_FORM, ACTIVE_MAIN } from '../../store/consts';

const Layout = () => {
  const { main, about, form } = useTypeSelector((state) => state.activePage);
  const dispatch = useAppDispatch();
  const activeMainHandle = () => {
    dispatch({ type: ACTIVE_MAIN });
  };

  const activeAboutHandle = () => {
    dispatch({ type: ACTIVE_ABOUT });
  };

  const activeFormHandle = () => {
    dispatch({ type: ACTIVE_FORM });
  };

  return (
    <>
      <header className="header-wrap">
        <Link to="/" className={`unlink ${main}`} onClick={activeMainHandle}>
          main
        </Link>
        <Link to="/about" className={`unlink ${about}`} onClick={activeAboutHandle}>
          about us
        </Link>
        <Link to="/form" className={`unlink ${form}`} onClick={activeFormHandle}>
          form
        </Link>
      </header>
      <Outlet />
      <footer className="footer-wrap">2023</footer>
    </>
  );
};

export default Layout;
