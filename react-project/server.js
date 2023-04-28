import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
// import { renderToPipeableStream } from 'react-dom/server';
// import { Provider } from 'react-redux';
import express from 'express';
import { createServer as createViteServer } from 'vite';
// import { renderToString } from 'react-dom/server';
// import setupStore from './store/store';
// import App from './src/App';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// const handleRender = (req, res) => {
//   const store = setupStore({});
//   const html = renderToString(
//     <Provider store={store}>
//       <App />
//     </Provider>
//   );
//   const preloadedState = store.getState();

//   res.send(renderFullPage(html, preloadedState));
// };

const createServer = async () => {
  const app = express();
  // const store = setupStore({});

  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: 'custom',
  });

  app.use(vite.middlewares);

  app.listen(5173, () => {
    console.log('Server started at http://localhost:5173');
  });
  app.use('*', async (req, res, next) => {
    const url = req.originalUrl;
    // const { pipe } = renderToPipeableStream(<App />, {
    //   bootstrapScripts: ['/entry-client.tsx'],
    //   onShellReady() {
    //     response.setHeader('content-type', 'text/html');
    //     pipe(response);
    //   },
    // });

    try {
      let template = fs.readFileSync(path.resolve(__dirname, 'index.html'), 'utf-8');

      template = await vite.transformIndexHtml(url, template);

      const { render } = await vite.ssrLoadModule('/src/entry-server.tsx');

      const appHtml = await render(url);

      const html = template.replace(`<!--ssr-outlet-->`, appHtml);

      res.status(200).set({ 'Content-Type': 'text/html' }).end(html);
    } catch (e) {
      vite.ssrFixStacktrace(e);
      next(e);
    }
  });
};

createServer();
