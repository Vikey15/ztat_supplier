import express from 'express';
import { createSSRApp } from 'vue';
import router from './src/router.js'; // Import default router
import { renderToString } from 'vue/server-renderer';
import { createServer } from 'vite';

const app = express();

const startServer = async () => {
  const vite = await createServer({
    server: { middlewareMode: 'ssr' }, // Use SSR middleware mode
  });

  // Use Vite's connect instance as middleware
  app.use(vite.middlewares);

  app.get('*', async (req, res) => {
    try {
      const { default: App } = await vite.ssrLoadModule('/src/App.vue');

      const ssrApp = createSSRApp(App);
      ssrApp.use(router); // Use the default exported router

      await router.push(req.url);
      await router.isReady();

      const html = await renderToString(ssrApp);

      const template = await vite.transformIndexHtml(req.url, `
        <!DOCTYPE html>
        <html lang="en">
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>SSR Vue App</title>
          </head>
          <body>
            <div id="app">${html}</div>
          </body>
        </html>
      `);

      res.status(200).send(template);
    } catch (error) {
      vite.ssrFixStacktrace(error);
      console.error('SSR Error:', error);
      res.status(500).send('Internal Server Error');
    }
  });

  const PORT = 3000;
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
};

startServer();
