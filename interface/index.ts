export interface IMovies {
  animes: Array<IMovie>;
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
}
