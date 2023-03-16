import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import React from 'react';
import Main from './pages/main-page/MainPage';
import Header from './components/header/Header';
import AboutPage from './pages/about-page/AboutPage';
import Page404 from './pages/page404/Page404';

class App extends React.Component {
  render(): React.ReactNode {
    return (
      <>
        <div className="app-wrap">
          {/* <Header /> */}
          <h1>main</h1>
          <Routes>
            <Route path="/">
              <Route path="/" element={<Main />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/404" element={<Page404 />} />
              <Route path="*" element={<Navigate to="/404" />} />
            </Route>
          </Routes>
        </div>
      </>
    );
  }
}

export default App;
