import type { NextPage } from 'next';
import { ComponentRandom } from '../components';
import Listing from '../components/Listing';
import { API_URL } from 'utils';
import { IMovies } from '../interface';
import { ThemeProvider } from 'next-themes';
interface IProps {
  data: IMovies;
}
const Home: NextPage<IProps> = props => {
  const { data } = props;
  return (
    <ThemeProvider>
      <ComponentRandom carousels={data?.carousels} />
      <Listing
        animes={data?.animes}
        latest={data?.latest}
        tv_shows={data?.tv_shows}
        movies={data?.movies}
      />
    </ThemeProvider>
  );
};

export async function getServerSideProps() {
  const res = await fetch(`${API_URL}/home`);
  const data = await res.json();
  return { props: { data } };
}
export default Home;
