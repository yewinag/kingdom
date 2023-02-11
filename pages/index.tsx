import { ComponentGoogleAds, ComponentRandom, Listing } from '@components';
import { IMovies, ISeoInfo } from '@interface';
import { FlexCenter } from '@styles';
import { API_URL, BANNER_SLOT, CLIENT_KEY } from '@utils';
import MetaTags from 'components/MetaTags';
import type { NextPage } from 'next';
import { BeatLoader } from 'react-spinners';
interface IProps {
  data: IMovies;
  error?: string;
}
const Home: NextPage<IProps> = ({ data, error }) => {
  if (error) {
    window && window.location.reload();
    return (
      <FlexCenter>
        <BeatLoader color={'#D12729'} />
      </FlexCenter>
    );
  }
  const metaData: ISeoInfo = {
    title: `Soulkingdom - watch films online`,
    description: `Soulkingdom - watch films online`
  };

  return (
    <>
      <MetaTags metaData={metaData} />
      <ComponentGoogleAds path="home" client={CLIENT_KEY} slot={BANNER_SLOT} />
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
