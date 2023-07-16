import {
  ComponentAds,
  ComponentNotFound,
  // ComponentVideoAds,
  DownloadIcon,
  Sidebar
} from '@components';
import { ads_url, defaultImage, defaultImageCast } from '@constants';
import { IMovieDetail, ISeoInfo } from '@interface';
import {
  DetailStyles,
  FlexCenter,
  MainContent,
  SeactionHeading
} from '@styles';
import { fetcher, HOST_PATH, light, TELEGRAM_LINK } from '@utils';
import MetaTags from 'components/MetaTags';
import { Social } from 'components/Social';
import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { BeatLoader } from 'react-spinners';
// import useSWR from 'swr';
interface IResLinks {
  drive_url: string;
}
const Detail: NextPage = (props) => {
  const {
    query: { id }
  } = useRouter();
  
  const [data, setData] = useState<IMovieDetail>();
  const [error, setError] = useState<string>('');
  const [link, setLink] = useState<IResLinks>();
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    // fetchDetail(props);
    setToLocalState(props);
  }, []);

  const setToLocalState = async (props: any) => {
    setLoading(true);
    setData(props.data);
    setLoading(false);
    if(props.error !== '') {
      setError(props.error)  
    }
  }

  // const fetchDetail = async () => {
  //   try {
  //     setLoading(true);
  //     const res = await fetcher(`/movies/${id || 0}`);
  //     // const link = await fetcher(`/shows/${id || 0}/download-links`);
  //     setData(res);
  //     // setLink(link);
  //     setLoading(false);
  //   } catch (err: any) {
  //     setLoading(false);
  //     return new Error(err);
  //   }
  // };

  // const { data, error } = useSWR<IMovieDetail, Error>(
  //   `/movies/${id || 0}`,
  //   fetcher
  // );
  // const { data: res } = useSWR<IResLinks | undefined, Error>(
  //   [`/shows/${id || 0}/download-links`],
  //   fetcher
  // );

  if (loading) {
    return (
      <FlexCenter>
        <BeatLoader color={light.primary_500} />
      </FlexCenter>
    );
  }
  // if (data === undefined && !loading) {
  //   return <ComponentNotFound />;
  // }

  const metaData: ISeoInfo = {
    title: `${data?.name} - watching ${data?.name} on Soulkingdom`,
    description: `Soulkingdom - watching overview ${data?.overview} of film ${data?.name}`
  };

  return (
    <MainContent>
      { error !== '' ? (
        <ComponentNotFound />
      ) : (
        <DetailStyles>
          <MetaTags metaData={metaData} />
          <section className="listing-layout">
            <section className="content-body">
              <div className="detail">
                <div className="image">
                  <Image
                    src={data?.cover_path || defaultImage}
                    alt={data?.mm_name}
                    width={160}
                    height={237}
                    blurDataURL="/soul-kingdom-placeholder-cast.png"
                    loading={'lazy'}
                    placeholder="blur"
                  />
                </div>
                <div className="info">
                  <SeactionHeading>{`${data?.mm_name}`}</SeactionHeading>
                  <p className="small">{data?.released_date}</p>
                  <div className="type">
                    {data?.genres.map((item, index) => (
                      <span key={index}>{item.name}</span>
                    ))}
                  </div>
                  <p className="small">{`IMDB - ${data?.rating}`}</p>
                </div>
              </div>
              <ComponentAds img_url="/ads-detail-banner.jpg" url={ads_url} />
              <div className="description">
                <SeactionHeading>Complete Cast</SeactionHeading>
                <p>{data?.overview}</p>
                <Image
                  src={data?.backdrop_path || defaultImageCast}
                  alt={data?.name}
                  width={500}
                  height={288}
                  blurDataURL="/soul-kingdom-placeholder-cast.png"
                  loading={'lazy'}
                  placeholder="blur"
                />
              </div>
              <ComponentAds img_url="/skin-care-ads.jpeg" url={ads_url} />

              <div className="download">
                <header>
                  <h4>Download Links</h4>
                </header>
                <article>
                  <Link href={link?.drive_url || '/'}>
                    <a target="_blank">
                      <div className="link-title">
                        <p className="download-icon">
                          <DownloadIcon />
                          Option 1
                        </p>
                      </div>
                    </a>
                  </Link>
                </article>
              </div>
              <div className="share">
                <Social
                  fbLink={`${HOST_PATH}/movie/${id}` || '/'}
                  telLink={TELEGRAM_LINK || '/'}
                />
              </div>
              <ComponentAds img_url="/ads-innwa.gif" url={ads_url} />
            </section>
            <Sidebar />
          </section>
        </DetailStyles>
      )}
    </MainContent>
  );
};

export async function getServerSideProps(context: any) {
  const { params } = context;
  let error = '';
  let data = {};
  try {
    const res = await fetcher(`/movies/${params.id}`)
    data = res;
  } catch (e: any) {
    error = e.toString();
  }
  return { props: { data, error } };
}

export default Detail;
