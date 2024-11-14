import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';
import path from 'path';
import { routes } from './src/router.js';

// Function to generate the sitemap
async function generateSitemap() {
  const sitemap = new SitemapStream({ hostname: 'http://localhost:3000' });

  // Write the sitemap.xml file
  const writeStream = createWriteStream(path.resolve('./public/sitemap.xml'));
  sitemap.pipe(writeStream);

  // Add each route from your routes array to the sitemap
  routes.forEach(route => {
    sitemap.write({ url: route.path, changefreq: 'weekly', priority: 0.8 });
  });

  // Close the sitemap stream and save it
  sitemap.end();
  await streamToPromise(sitemap);
  console.log('Sitemap has been generated!');
}

generateSitemap();
