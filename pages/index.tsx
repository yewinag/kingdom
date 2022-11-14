import { ComponentGoogleAds, ComponentRandom, Listing } from '@components';
import { IMovies, ISeoInfo } from '@interface';
import { API_URL } from '@utils';
import MetaTags from 'components/MetaTags';
import type { NextPage } from 'next';
interface IProps {
  data: IMovies;
  error?: string;
}
const Home: NextPage<IProps> = props => {
  const { data, error } = props;
  if (error) {
    window && window.location.reload();
    return <p>{error}</p>;
  }
  const metaData: ISeoInfo = {
    title: `ငါတို့သည် ဆိုးကင်းဒန်း ဖစ်ကြသည်`,
    description: `ငါတို့သည် ဆိုးကင်းဒန်း ငါတို့သာဖစ်ကြသည်`
  };

  return (
    <>
      <MetaTags metaData={metaData} />
      <ComponentGoogleAds client={''} slot={''} />
      <ComponentRandom carousels={data?.carousels} />
      <Listing
        animes={data?.anime}
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
