import { Navigate, Route, Routes } from 'react-router-dom';
import React from 'react';
import Main from './pages/main-page/MainPage';
import Layout from './components/layout/Layout';
import AboutPage from './pages/about-page/AboutPage';
import Page404 from './pages/page404/Page404';
import FormPage from './pages/form-page/FormPage';
import './App.css';
import './index.css';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index path="/" element={<Main />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/form" element={<FormPage />} />
          <Route path="/404" element={<Page404 />} />
          <Route path="*" element={<Navigate to="/404" />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
