import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

// import { Router } from './router';
import React from 'react';
import App from './App';

ReactDOM.hydrateRoot(
  document.getElementById('app') as HTMLElement,
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
