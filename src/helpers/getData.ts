import type { Movie, Video } from '../interfaces/Interfaces';

// const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     Authorization:
//       'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNTcwYjI5OWNhMGY4MTkxYjBhM2MzMTQyZWFlZDVmZCIsInN1YiI6IjVkZGVkY2RiNGY1ODAxMDAxNmZiNmQwMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TnHQFx37NmxPdFrpG_R4Zuat-ySby6psK5UVFJiHGOI',
//   },
// };

// // LISTA DE PELICULAS DEL API
// export const getDataMovies = async () => {
//   const responseMovies = await fetch(
//     'https://api.themoviedb.org/3/movie/now_playing?language=es_MX&page=1',
//     this.options,
//   );
//   const { results: movies }: { results: Movie[] } = await responseMovies.json();
//   return movies;
// };



// // DETALLE DE PELICULA DEL API
// export const getDataMovie = async (id: any) => {
//   const response = await fetch(
//     `https://api.themoviedb.org/3/movie/${id}?language=es-MX`,
//     this.options,
//   );
//   const data = await response.json();
//   return data;
// };

// // CASTING DE LA PELICULA DEL API
// export const getDataCast = async (id: any) => {
//   const responseCast = await fetch(
//     `https://api.themoviedb.org/3/movie/${id}/credits?language=es-MX`,
//     this.options,
//   );
//   const dataCast = await responseCast.json();
//   const { cast } = dataCast;
//   return cast;
// };


// // VIDEOS
// export const getDataVideos = async (id: any) => {
//   const responseVideos = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=es-MX`, options);
//   const { results: videos } = await responseVideos.json();
//   const videosTrailers = videos.filter((video: Video) => video.type === 'Trailer');
//   return videosTrailers;
// };

export class GetData {
  static options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNTcwYjI5OWNhMGY4MTkxYjBhM2MzMTQyZWFlZDVmZCIsInN1YiI6IjVkZGVkY2RiNGY1ODAxMDAxNmZiNmQwMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TnHQFx37NmxPdFrpG_R4Zuat-ySby6psK5UVFJiHGOI',
    },
  };

  static async movies() {
    const responseMovies = await fetch(
      'https://api.themoviedb.org/3/movie/now_playing?language=es-MX&page=1',
      this.options,
    );
  const { results: movies }: { results: Movie[] } = await responseMovies.json();
return movies;
  }

  static async movie(id: string) {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?language=es-MX`,
      this.options,
    );
    const data = await response.json();
    return data;
  }

  static async cast(id: string) {
    const responseCast = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/credits?language=es-MX`,
      this.options,
    );
    const dataCast = await responseCast.json();
    const { cast } = dataCast;
    return cast;
  }

  static async videos(id: string) {
    const responseVideos = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=es-MX`, this.options);
    const { results: videos } = await responseVideos.json();
    const videosTrailers = videos.filter((video: Video) => video.type === 'Trailer');
    return videosTrailers;
  }
}
