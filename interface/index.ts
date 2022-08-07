export interface IMovies {
  thumb: string;
  title: string;
  slug: string;
  desc: string;
  rating: number;
  year: number;
}
export interface IListingMovies {
  status: string;
  result: IMovies[];
  total: number;
}
