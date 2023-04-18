import { Navigate, Route, Routes, BrowserRouter } from 'react-router-dom';
import React, { useState } from 'react';
// import { Provider } from 'react-redux';
// import store from './store/store';
import Main from './pages/main-page/MainPage';
import Layout from './components/layout/Layout';
import AboutPage from './pages/about-page/AboutPage';
import Page404 from './pages/page404/Page404';
import FormPage from './pages/form-page/FormPage';
import { ActiveState } from './types';
import './App.css';
import { ModalWindowState } from './context/ModalWindowContext';

const App = () => {
  const [active, setActive] = useState<ActiveState>({ main: 'active', about: '', form: '' });

  return (
    <>
      <BrowserRouter>
        <ModalWindowState>
          <div className="app-wrap">
            <Routes>
              <Route path="/" element={<Layout state={active} setState={setActive} />}>
                <Route path="/" element={<Main />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/form" element={<FormPage />} />
                <Route path="/404" element={<Page404 />} />
                <Route path="*" element={<Navigate to="/404" />} />
              </Route>
            </Routes>
          </div>
        </ModalWindowState>
      </BrowserRouter>
    </>
  );
};

export default App;
