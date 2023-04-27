import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';

import App from './App';
import React from 'react';
import { Provider } from 'react-redux';
import setupStore from './store/store';

interface IRenderProps {
  path: string;
}

export const render = ({ path }: IRenderProps) => {
  return ReactDOMServer.renderToString(
    // renderToPipableStream(
    <StaticRouter location={path}>
      <Provider store={setupStore({})}>
        <App />
      </Provider>
    </StaticRouter>
    // {
    //   bootstrapScripts: ['/entry-client.tsx'],
    // }
  );
};
