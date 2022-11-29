export interface IMovies {
  anime: Array<IMovie>;
  latest: Array<IMovie>;
  tv_shows: Array<IMovie>;
  movies: Array<IMovie>;
  carousels: Array<IMovie>;
  upcomings: Array<IMovie>;
}

export interface IMovie {
  id: number;
  cover_path: string;
  backdrop_path: string;
  show_type: string;
  name: string;
  mm_name: string;
  last_season: number;
  last_episode: number;
  created_at: string;
  rating: number;
  released_date: string;
}

export interface ICasts {
  id: number;
  name: string;
}
export interface IGenres {
  id: number;
  name: string;
}
export interface INetwork {
  id: number;
  name: string;
}
export interface IMovieDetail {
  backdrop_path: string;
  casts: ICasts[] | [];
  cover_path: string;
  genres: IGenres[] | [];
  id: number;
  mm_name: string;
  name: string;
  network: INetwork;
  overview: string;
  published: boolean;
  rating: number;
  released_date: string;
  slug: string;
  streaming_id: string;
  trailer_link: string;
}
export interface IDownloadLink {
  download: string;
  streaming: string;
}
export interface IDownloadLinks {
  '360p': string;
  '480p': string;
  '720p': string;
  '1080p': string;
}
export interface ISeoInfo {
  title: string;
  description: string;
}
