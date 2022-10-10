import { ComponentRandom, Listing } from '@components';
import { IMovies } from '@interface';
import { API_URL } from '@utils';
import type { NextPage } from 'next';
interface IProps {
  data: IMovies;
}
const Home: NextPage<IProps> = props => {
  const { data } = props;
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

export async function getServerSideProps() {
  const res = await fetch(`${API_URL}/home`);
  const data = await res.json();
  return { props: { data } };
}
export default Home;
