import { ComponentRandom, Listing } from '@components';
import { IMovies } from '@interface';
import { API_URL } from '@utils';
import type { NextPage } from 'next';

interface IProps {
  data: IMovies;
  error?: string;
}
const Home: NextPage<IProps> = props => {
  const { data, error } = props;
  if (error) {
    return <p>{error}</p>;
  }
  return (
    <>
      <ComponentRandom carousels={data?.carousels} />
      <Listing
        animes={data?.animes}
        latest={data?.latest}
        tv_shows={data?.tv_shows}
        movies={data?.movies}
        data={data}
      />
    </>
  );
};
export async function getServerSideProps() {
  let error = '';
  let data = [];
  try {
    const res = await fetch(`${API_URL}/home`, {
      headers: {
        Accept: 'application/json, text/plain, */*',
        'User-Agent': '*'
      }
    });
    data = await res.json();
  } catch (e: any) {
    error = e.toString();
  }

  return { props: { data, error } };
}
export default Home;
