import { cp, mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { resolve, sep } from 'node:path';

const root = fileURLToPath(new URL('../', import.meta.url));
const output = resolve(root, 'dist');
if (!output.startsWith(resolve(root) + sep)) throw new Error('Invalid output directory');
await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });
for (const file of ['index.html', '404.html', 'robots.txt', 'sitemap.xml', 'CNAME', '.nojekyll']) {
  await cp(resolve(root, file), resolve(output, file));
}
await cp(resolve(root, 'assets'), resolve(output, 'assets'), { recursive: true });

// Preserve links from the previous site, including its original resume URL.
const oldRoutes = {
  publications: 'research', projects: 'code', cv: 'experience', teaching: 'about',
  hobbies: 'about', news: 'research', blog: 'research', about: 'about',
};
for (const [route, anchor] of Object.entries(oldRoutes)) {
  const destination = `/#${anchor}`;
  await mkdir(resolve(output, route), { recursive: true });
  await writeFile(resolve(output, route, 'index.html'), `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta http-equiv="refresh" content="0;url=${destination}"><link rel="canonical" href="https://arabporr.com/${destination.slice(1)}"><title>Reza Arabpour</title></head><body><p>This page has moved. <a href="${destination}">Continue to Reza Arabpour’s website</a>.</p></body></html>\n`);
}
await mkdir(resolve(output, 'assets/pdf'), { recursive: true });
await cp(resolve(root, 'assets/Reza_Arabpour_CV.pdf'), resolve(output, 'assets/pdf/Reza_CV.pdf'));
const html = await readFile(resolve(output, 'index.html'), 'utf8');
console.log(`Built portfolio into ${output} (${Math.round(Buffer.byteLength(html) / 1024)} KB HTML).`);
