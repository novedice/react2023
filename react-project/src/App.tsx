import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import React from 'react';
import Main from './pages/main-page/MainPage';
import Header from './components/header/Header';
import AboutPage from './pages/about-page/AboutPage';

class App extends React.Component {
  render(): React.ReactNode {
    return (
      <div className="app-wrap">
        <Header />

        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/404" />
          <Route path="*" element={<Navigate to="/404" />} />
        </Routes>
      </div>
    );
  }
}

export default App;
