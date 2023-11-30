import { e as createAstro, f as createComponent, r as renderTemplate, g as addAttribute, h as renderHead, i as renderSlot, m as maybeRenderHead, j as renderComponent, F as Fragment } from '../astro_bc42ca51.mjs';
import 'html-escaper';
import 'clsx';
/* empty css                          *//* empty css                          */
const $$Astro$2 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="es"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body> ${renderSlot($$result, $$slots["default"])} <footer></footer> </body></html>`;
}, "/Users/herdez/Desktop/class-astro-moive-api/src/layouts/Layout.astro", void 0);

const URL_IMAGE = "https://image.tmdb.org/t/p/w500";
const ANONIMOUS_IMAGE = "/images/question.svg";

class GetData {
  static options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNTcwYjI5OWNhMGY4MTkxYjBhM2MzMTQyZWFlZDVmZCIsInN1YiI6IjVkZGVkY2RiNGY1ODAxMDAxNmZiNmQwMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TnHQFx37NmxPdFrpG_R4Zuat-ySby6psK5UVFJiHGOI"
    }
  };
  static async movies() {
    const responseMovies = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=es_MX&page=1",
      this.options
    );
    const { results: movies } = await responseMovies.json();
    return movies;
  }
  static async movie(id) {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?language=es-MX`,
      this.options
    );
    const data = await response.json();
    return data;
  }
  static async cast(id) {
    const responseCast = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/credits?language=es-MX`,
      this.options
    );
    const dataCast = await responseCast.json();
    const { cast } = dataCast;
    return cast;
  }
  static async videos(id) {
    const responseVideos = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=es-MX`, this.options);
    const { results: videos } = await responseVideos.json();
    const videosTrailers = videos.filter((video) => video.type === "Trailer");
    return videosTrailers;
  }
}

const $$Astro$1 = createAstro();
const $$CardDetail = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$CardDetail;
  const { data, cast, videosTrailers } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="card" data-astro-cid-nysw77kp> <h1 data-astro-cid-nysw77kp>${data.original_title}</h1> <img class="card-poster"${addAttribute(`${URL_IMAGE}${data.poster_path}`, "src")} alt="" data-astro-cid-nysw77kp> ${data.overview ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "data-astro-cid-nysw77kp": true }, { "default": ($$result2) => renderTemplate` <h2 data-astro-cid-nysw77kp>Overview</h2> <p class="overview" data-astro-cid-nysw77kp>${data.overview}</p> ` })}` : ""} <h2 data-astro-cid-nysw77kp>Reparto</h2> <div class="cast" data-astro-cid-nysw77kp> ${cast.map((actor) => renderTemplate`<div class="actor" data-astro-cid-nysw77kp> <img class="actor-photo"${addAttribute(
    actor.profile_path ? `${URL_IMAGE}${actor.profile_path}` : `${ANONIMOUS_IMAGE}`,
    "src"
  )} alt="" data-astro-cid-nysw77kp> <div class="actor-text" data-astro-cid-nysw77kp> <h5 data-astro-cid-nysw77kp>${actor.name}</h5> <p data-astro-cid-nysw77kp>${actor.character}</p> </div> </div>`)} </div> ${videosTrailers.length > 0 ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "data-astro-cid-nysw77kp": true }, { "default": ($$result2) => renderTemplate` <div class="trailes" data-astro-cid-nysw77kp> <h2 data-astro-cid-nysw77kp>Trailers</h2> ${videosTrailers.map((video) => renderTemplate`<div class="videos" data-astro-cid-nysw77kp> <h3 data-astro-cid-nysw77kp>${video.name}</h3> <iframe${addAttribute(`https://www.youtube.com/embed/${video.key}`, "src")} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen data-astro-cid-nysw77kp></iframe> </div>`)} </div> ` })}` : ""} </section> `;
}, "/Users/herdez/Desktop/class-astro-moive-api/src/components/CardDetail.astro", void 0);

const $$Astro = createAstro();
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  const data = await GetData.movie(id);
  const cast = await GetData.cast(id);
  const videosTrailers = await GetData.videos(id);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Api Movies Demo" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "CardDetail", $$CardDetail, { "data": data, "cast": cast, "videosTrailers": videosTrailers })} ` })}`;
}, "/Users/herdez/Desktop/class-astro-moive-api/src/pages/details/[id].astro", void 0);

const $$file = "/Users/herdez/Desktop/class-astro-moive-api/src/pages/details/[id].astro";
const $$url = "/details/[id]";

const _id_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$id,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Layout as $, GetData as G, URL_IMAGE as U, _id_ as _ };
