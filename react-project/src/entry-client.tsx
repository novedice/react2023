import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import React from 'react';
import App from './App';
import setupStore from './store/store';

ReactDOM.hydrateRoot(
  document.getElementById('app') as HTMLElement,
  <BrowserRouter>
    <Provider store={setupStore({})}>
      <App />
    </Provider>
  </BrowserRouter>
);
