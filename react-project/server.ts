import express from 'express';
import { createServer as createViteServer } from 'vite';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const createServer = async () => {
  const app = express();

  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: 'custom',
  });

  app.use(vite.middlewares);

  app.get('*', async (req, res) => {
    const url = req.url;

    let template = fs.readFileSync(path.resolve(__dirname, 'index.html'), 'utf-8');

    template = await vite.transformIndexHtml(url, template);

    const html = template.split(`<!--ssr-outlet-->`);

    const render = (await vite.ssrLoadModule('/src/entry-server.tsx')).render;

    if (url !== '/' && url !== '/form' && url !== '/about' && url !== '/404') {
      return res.redirect('/404');
    }

    const { pipe } = await render(url, {
      bootstrapModules: ['/src/entry-client.tsx'],

      onShellReady() {
        res.write(html[0]);
        pipe(res);
      },
      onAllReady() {
        res.write(html[1]);
        res.end();
      },
    });
  });

  app.listen(5173, () => {
    console.log('Server started at http://localhost:5173');
  });
};

createServer();
