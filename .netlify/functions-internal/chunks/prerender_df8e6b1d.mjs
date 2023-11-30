import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute, k as renderComponent, F as Fragment } from './astro_cc2ee967.mjs';
import 'html-escaper';
import 'clsx';
import { U as URL_IMAGE, A as ANONIMOUS_IMAGE, G as GetData, $ as $$Layout } from './pages/index_724ef0d4.mjs';
/* empty css                         */
const $$Astro$1 = createAstro();
const $$CardDetail = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$CardDetail;
  const { data, cast, videosTrailers } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="card" data-astro-cid-nysw77kp> <h1 data-astro-cid-nysw77kp>${data.original_title}</h1> <img class="card-poster"${addAttribute(`${URL_IMAGE}${data.poster_path}`, "src")} alt="" data-astro-cid-nysw77kp> ${data.overview ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "data-astro-cid-nysw77kp": true }, { "default": ($$result2) => renderTemplate` <h2 data-astro-cid-nysw77kp>Overview</h2> <p class="overview" data-astro-cid-nysw77kp>${data.overview}</p> ` })}` : ""} <h2 data-astro-cid-nysw77kp>Reparto</h2> <div class="cast" data-astro-cid-nysw77kp> ${cast.map((actor) => renderTemplate`<div class="actor" data-astro-cid-nysw77kp> <img class="actor-photo"${addAttribute(
    actor.profile_path ? `${URL_IMAGE}${actor.profile_path}` : `${ANONIMOUS_IMAGE}`,
    "src"
  )} alt="" data-astro-cid-nysw77kp> <div class="actor-text" data-astro-cid-nysw77kp> <h5 data-astro-cid-nysw77kp>${actor.name}</h5> <p data-astro-cid-nysw77kp>${actor.character}</p> </div> </div>`)} </div> ${videosTrailers.length > 0 ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "data-astro-cid-nysw77kp": true }, { "default": ($$result2) => renderTemplate` <div class="trailes" data-astro-cid-nysw77kp> <h2 data-astro-cid-nysw77kp>Trailers</h2> ${videosTrailers.map((video) => renderTemplate`<div class="videos" data-astro-cid-nysw77kp> <h3 data-astro-cid-nysw77kp>${video.name}</h3> <iframe${addAttribute(`https://www.youtube.com/embed/${video.key}`, "src")} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" data-astro-cid-nysw77kp></iframe> </div>`)} </div> ` })}` : ""} </section> `;
}, "/Users/herdez/Desktop/class-astro-moive-api/src/components/CardDetail.astro", void 0);

const $$Astro = createAstro();
const prerender = true;
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  const data = await GetData.movie(id);
  const cast = await GetData.cast(id);
  const videosTrailers = await GetData.videos(id);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Cuevana 4.0" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "CardDetail", $$CardDetail, { "data": data, "cast": cast, "videosTrailers": videosTrailers })} ` })}`;
}, "/Users/herdez/Desktop/class-astro-moive-api/src/pages/details/[id].astro", void 0);

const $$file = "/Users/herdez/Desktop/class-astro-moive-api/src/pages/details/[id].astro";
const $$url = "/details/[id]";

export { $$id as default, $$file as file, prerender, $$url as url };
