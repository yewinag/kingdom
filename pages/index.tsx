import { ComponentAds, ComponentRandom, Listing } from '@components';
import { IMovies, ISeoInfo } from '@interface';
import { FlexCenter } from '@styles';
import { fetcher } from '@utils';
import MetaTags from 'components/MetaTags';
import type { NextPage } from 'next';
interface IProps {
  data: IMovies;
  error?: string;
}
const Home: NextPage<IProps> = ({ data, error }) => {
  const metaData: ISeoInfo = {
    title: `Soulkingdom - watch films online`,
    description: `Soulkingdom - watch films online`
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
      <ComponentAds img_url="/banner.gif" url={'www.soulkingdom.net'} />
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
export async function getStaticProps() {
  let error = '';
  let data = {};
  try {
    const res = await fetcher('/home');
    data = res;
  } catch (e: any) {
    error = e.toString();
  }
  return { props: { data, error } };
}

export default Home;
