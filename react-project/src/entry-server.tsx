import ReactDOMServer, { RenderToPipeableStreamOptions } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';

import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';
import App from './App';
('@types/express');

export const render = (path: string, options: RenderToPipeableStreamOptions) =>
  ReactDOMServer.renderToPipeableStream(
    <Provider store={store}>
      <StaticRouter basename="/" location={path}>
        <App />
      </StaticRouter>
    </Provider>,
    options
  );
