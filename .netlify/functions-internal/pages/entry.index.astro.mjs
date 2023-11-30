import { renderers } from '../renderers.mjs';
import { onRequest } from '../_empty-middleware.mjs';
import * as adapter from '@astrojs/netlify/netlify-functions.js';
import { manifest } from '../manifest_1739e0b2.mjs';

const page = () => import('../chunks/prerender_a512f4e8.mjs');

const pageModule = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	onRequest,
	page,
	renderers
}, Symbol.toStringTag, { value: 'Module' }));

const _manifest = Object.assign(manifest, {
	pageModule,
	renderers,
});
const _args = {};

const _exports = adapter.createExports(_manifest, _args);
const handler = _exports['handler'];

const _start = 'start';
if(_start in adapter) {
	adapter[_start](_manifest, _args);
}

export { handler, pageModule };
