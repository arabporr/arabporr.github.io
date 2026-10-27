import assert from 'node:assert/strict';
import { readFile, access } from 'node:fs/promises';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../', import.meta.url));
const html = await readFile(resolve(root, 'index.html'), 'utf8');
const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map(match => match[1]);
assert.equal(new Set(ids).size, ids.length, 'Duplicate element IDs');
assert.equal((html.match(/<h1\b/g) || []).length, 1, 'Exactly one main heading required');
for (const [, href] of html.matchAll(/(?:href|src)="([^"]+)"/g)) {
  if (/^(?:https?:|mailto:|data:)/.test(href)) continue;
  if (href.startsWith('#')) { assert(ids.includes(href.slice(1)), `Missing anchor: ${href}`); continue; }
  await access(resolve(root, href.replace(/^\.\//, '').split(/[?#]/)[0]));
}
for (const [, json] of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) JSON.parse(json);
assert(!/lorem ipsum|TODO|placeholder\.com|example\.com/i.test(html), 'Unfinished content found');
assert(html.includes('Manuscript in preparation'), 'Working-paper status must remain explicit');
assert(html.includes('ICML 2025 · ES-FoMo Workshop'), 'Workshop attribution must remain explicit');
console.log(`Checked headings, ${ids.length} unique IDs, local links/assets, structured data, and publication statuses.`);
