import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, g as addAttribute, j as renderComponent } from '../astro_bc42ca51.mjs';
import 'html-escaper';
import 'clsx';
import { U as URL_IMAGE, G as GetData, $ as $$Layout } from './_id__0b41fe66.mjs';
/* empty css                           */
const $$Astro$1 = createAstro();
const $$MovieList = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$MovieList;
  const { movies } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<h1 data-astro-cid-ty7mlg53>Api Movies Demo</h1> <section class="movies-grid" data-astro-cid-ty7mlg53> ${movies.map((movie) => renderTemplate`<a${addAttribute(`/details/${movie.id}`, "href")} data-astro-cid-ty7mlg53> <img${addAttribute(`${URL_IMAGE}${movie.poster_path}`, "src")}${addAttribute(movie.title, "alt")}${addAttribute(movie.title, "title")} data-astro-cid-ty7mlg53> <h3 data-astro-cid-ty7mlg53>${movie.title}</h3> </a>`)} </section> `;
}, "/Users/herdez/Desktop/class-astro-moive-api/src/components/MovieList.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const movies = await GetData.movies();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Api Movies Demo" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "MovieList", $$MovieList, { "movies": movies })} ` })}`;
}, "/Users/herdez/Desktop/class-astro-moive-api/src/pages/index.astro", void 0);

const $$file = "/Users/herdez/Desktop/class-astro-moive-api/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
