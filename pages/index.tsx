import {
  // ComponentGoogleAds,
  ComponentRandom,
  Listing
} from '@components';
import { ILogin, IMovies, ISeoInfo } from '@interface';
import { login, selectAuth } from '@store';
import { FlexCenter } from '@styles';
import { API_URL } from '@utils';
import MetaTags from 'components/MetaTags';
import type { NextPage } from 'next';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { BeatLoader } from 'react-spinners';
interface IProps {
  data: IMovies;
  error?: string;
}
const Home: NextPage<IProps> = ({ data, error }) => {
  const { auth } = useSelector(selectAuth);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!auth.token) {
      const payload: ILogin = {
        name: window.navigator.userAgent,
        premium_code: 'PKJC9I'
      };
      // @ts-ignore
      dispatch(login(payload));
    }
  }, [auth]);

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
      {/* <ComponentGoogleAds /> */}
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
