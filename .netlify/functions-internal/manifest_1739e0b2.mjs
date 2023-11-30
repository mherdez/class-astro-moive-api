import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import 'string-width';
import 'mime';
import 'html-escaper';
import 'clsx';
import './chunks/astro_bc42ca51.mjs';
import { compile } from 'path-to-regexp';

if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}

new TextEncoder();

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return toPath;
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    })
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    ...serializedManifest,
    assets,
    componentMetadata,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/netlify/functions","routes":[{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":":root{--accent: 136, 58, 234;--accent-light: 224, 204, 250;--accent-dark: 49, 10, 101;--accent-gradient: linear-gradient( 45deg, rgb(var(--accent)), rgb(var(--accent-light)) 30%, white 60% )}html{font-family:system-ui,sans-serif;background:#13151a;background-size:224px;color:#fff}code{font-family:Menlo,Monaco,Lucida Console,Liberation Mono,DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New,monospace}footer{margin-bottom:5rem}\n.card[data-astro-cid-nysw77kp]{text-align:center}.card[data-astro-cid-nysw77kp] h1[data-astro-cid-nysw77kp]{font-size:3rem}.trailes[data-astro-cid-nysw77kp]{display:flex;justify-content:center;align-items:center;flex-direction:column;text-align:center}.overview[data-astro-cid-nysw77kp]{width:80%;margin:20px auto;text-align:justify;font-size:1.5rem;border:1px solid yellow;padding:20px}.cast[data-astro-cid-nysw77kp]{width:90%;margin:0 auto;display:flex;flex-wrap:nowrap;overflow-x:scroll;gap:1rem .85rem;box-sizing:border-box}.actor[data-astro-cid-nysw77kp]{text-align:center;border:2px solid grey}img[data-astro-cid-nysw77kp]{width:300px}.actor-photo[data-astro-cid-nysw77kp]{width:120px;aspect-ratio:1 / 1.5}.actor[data-astro-cid-nysw77kp] h5[data-astro-cid-nysw77kp]{font-size:.8rem;margin:10px 0 5px}.actor[data-astro-cid-nysw77kp] p[data-astro-cid-nysw77kp]{font-size:.6rem;margin:0;color:#ff0}.videos[data-astro-cid-nysw77kp]{margin:0 auto}iframe[data-astro-cid-nysw77kp]{width:560px;aspect-ratio:16 / 9;margin:0;border:none;box-shadow:5px 5px 15px #00000080;border-radius:15px;overflow:hidden}h3[data-astro-cid-nysw77kp]{margin:2rem 0 1rem}.card-poster[data-astro-cid-nysw77kp]{box-shadow:5px 5px 15px #00000080}.actor-text[data-astro-cid-nysw77kp]{padding:5px}\n"}],"routeData":{"route":"/details/[id]","type":"page","pattern":"^\\/details\\/([^/]+?)\\/?$","segments":[[{"content":"details","dynamic":false,"spread":false}],[{"content":"id","dynamic":true,"spread":false}]],"params":["id"],"component":"src/pages/details/[id].astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/herdez/Desktop/class-astro-moive-api/src/pages/details/[id].astro",{"propagation":"none","containsHead":true}],["/Users/herdez/Desktop/class-astro-moive-api/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var r=(i,c,s)=>{let n=async()=>{await(await i())()},t=new IntersectionObserver(e=>{for(let o of e)if(o.isIntersecting){t.disconnect(),n();break}});for(let e of s.children)t.observe(e)};(self.Astro||(self.Astro={})).visible=r;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astro-page-split:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/entry._image.astro.mjs","\u0000@astro-page-split:src/pages/index@_@astro":"pages/entry.index.astro.mjs","\u0000@astro-page-split:src/pages/details/[id]@_@astro":"pages/details/entry._id_.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000empty-middleware":"_empty-middleware.mjs","/node_modules/astro/dist/assets/endpoint/generic.js":"chunks/pages/generic_df91a6d6.mjs","/src/pages/index.astro":"chunks/prerender_a512f4e8.mjs","\u0000@astrojs-manifest":"manifest_1739e0b2.mjs","astro:scripts/before-hydration.js":""},"assets":["/favicon.svg","/images/question.svg","/index.html"]});

export { manifest };
