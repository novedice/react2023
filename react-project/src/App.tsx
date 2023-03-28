import { Navigate, Route, Routes, BrowserRouter } from 'react-router-dom';
import React from 'react';
import Main from './pages/main-page/MainPage';
import Layout from './components/layout/Layout';
import AboutPage from './pages/about-page/AboutPage';
import Page404 from './pages/page404/Page404';
import './App.css';

class App extends React.Component {
  state: {
    activeMain: string;
    activeAbout: string;
  };

  constructor(props: object) {
    super(props);
    this.state = { activeMain: 'active', activeAbout: '' };
  }

  render(): React.ReactNode {
    return (
      <>
        <BrowserRouter>
          <div className="app-wrap">
            <Routes>
              <Route path="/" element={<Layout state={this.state} setState={this.setState} />}>
                <Route path="/" element={<Main />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/404" element={<Page404 />} />
                <Route path="*" element={<Navigate to="/404" />} />
              </Route>
            </Routes>
          </div>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
