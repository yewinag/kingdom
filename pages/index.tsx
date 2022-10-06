import type { NextPage } from 'next';
import useSWR from 'swr';
import { ComponentRandom } from '../components';
import Listing from '../components/Listing';
import { fetcher } from 'utils';
import { IMovie, IMovies } from '../interface';
const Home: NextPage = () => {
  const { data, error } = useSWR<IMovies>([`/home`], fetcher);
  return (
    <>
      <ComponentRandom carousels={data?.carousels} />
      <Listing
        animes={data?.animes}
        latest={data?.latest}
        tv_shows={data?.tv_shows}
        movies={data?.movies}
      />
    </>
  );
};

export default Home;
