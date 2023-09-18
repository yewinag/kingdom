import { ComponentAds, ComponentRandom, Listing } from '@components';
import { ads_url } from '@constants';
import { IAds, IMovies, ISeoInfo } from '@interface';
import { FlexCenter } from '@styles';
import { fetcher } from '@utils';
import Footer from 'components/Footer';
import MetaTags from 'components/MetaTags';
import { enumAds } from 'interface/enum';
import type { NextPage } from 'next';
interface IProps {
  data: IMovies;
  error?: string;
  ads?: IAds[]
}
const Home: NextPage<IProps> = ({ data, ads, error }) => {
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
  const firstAds = ads?.find((ads) => ads.name === enumAds.HOEMFIRSTBANNER);
  const secondAds = ads?.find((ads) => ads.name === enumAds.HOMESECONDBANNER);

  return (
    <>
      <MetaTags metaData={metaData} />
      <div style={{ height: '10px' }} />      
      <ComponentAds img_url={firstAds?.image||"/soulk.gif"} url={ads_url} />
      <div style={{ height: '10px' }} />
      <ComponentAds img_url={secondAds?.image ||"/1000-120.gif"} url={ads_url} />
      <div style={{ height: '10px' }} />
      <ComponentRandom carousels={data?.carousels} />
      <Listing
        animes={data?.anime}
        latest={data?.latest}
        tv_shows={data?.tv_shows}
        movies={data?.movies}
        data={data}
        ads={ads}
      />
      <Footer />
    </>
  );
};
export async function getServerSideProps() {
  let error = '';
  let data = {};
  let ads = {};
  try {
    const res = await fetcher('/home');
    const adsRes = await fetcher('/ads');    
    if (typeof res === undefined) {
      return (error = 'nothing I can see');
    }        
    data = res;
    ads = adsRes;
  } catch (e: any) {
    error = e.toString();
  }
  return { props: { data, ads, error } };
}

export default Home;
