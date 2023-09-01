import { ComponentAds, Listing } from '@components';
import { ads_url } from '@constants';
import { IMovies, ISeoInfo } from '@interface';
import { FlexCenter } from '@styles';
import { fetcher } from '@utils';
import Footer from 'components/Footer';
import MetaTags from 'components/MetaTags';
import type { NextPage } from 'next';
interface IProps {
  data: IMovies;
  error?: string;
}
const Home: NextPage<IProps> = ({ data, error }) => {
  const metaData: ISeoInfo = {
    title: `Soulkingdom`,
    description: `Soulkingdom`
  };

  if (error) {
    return (
      <FlexCenter>
        <p>{error}</p>
      </FlexCenter>
    );
  }

  return (
    <>
      <MetaTags metaData={metaData} />
      <div style={{ height: '10px' }} />
      {/* <ComponentAds img_url="/mdl-game.gif" url={ads_url} /> */}
      <ComponentAds img_url="/soulk.gif" url={ads_url} />
      <div style={{ height: '10px' }} />
      <ComponentAds img_url="/starbetmm.jpg" url={ads_url} />
      <div style={{ height: '10px' }} />
     {/* <ComponentRandom carousels={data?.carousels} /> */}
      <Listing
        animes={data?.anime}
        latest={data?.latest}
        tv_shows={data?.tv_shows}
        movies={data?.movies}
        data={data}
      />
      <Footer />
    </>
  );
};
export async function getServerSideProps() {
  let error = '';
  let data = {};
  try {
    const res = await fetcher('/home');
    if (typeof res === undefined) {
      return (error = 'nothing I can see');
    }
    data = res;
  } catch (e: any) {
    error = e.toString();
  }
  return { props: { data, error } };
}

export default Home;
