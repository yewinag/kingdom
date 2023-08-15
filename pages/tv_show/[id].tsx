import {
  ComponentAds,
  // ComponentAds,
  ComponentNotFound,
  ComponentVideoAds,
  // ComponentVideoAds,
  // ComponentVideoAds,
  DownloadBtn,
  Sidebar
} from '@components';
import { ads_url, defaultImageCast } from '@constants';
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
import { Fragment } from 'react';
import { BeatLoader } from 'react-spinners';

interface IProps {
  data: IMovieDetail;
  error?: string;
}

const TVShowDetail: NextPage<IProps> = ({ data, error }) => {
  if (!data) {
    return <ComponentNotFound />;
  }

  if (error) {
    return (
      <FlexCenter>
        <p>{error}</p>
      </FlexCenter>
    );
  }

  const metaData: ISeoInfo = {
    title: `${data?.mm_name} films - watch ${data?.mm_name}  on soulkingdom `,
    description: `${data?.overview} complete cast of ${data?.mm_name} `
  };
  return (
    <MainContent>
      {data === undefined ? (
        <FlexCenter>
          <BeatLoader color={light.primary_500} />
        </FlexCenter>
      ) : (
        <DetailStyles>
          <MetaTags metaData={metaData} />
          <section className="listing-layout">
            <section className="content-body">
              <ComponentVideoAds img_url="/final.gif.mp4" url={ads_url} />
              <div className="detail">
                <div className="image">
                  <Image
                    src={data?.cover_path}
                    alt={data?.mm_name}
                    width={160}
                    height={237}
                    loading={'lazy'}
                    placeholder="blur"
                    blurDataURL="/soul-kingdom-placeholder-cast.png"
                  />
                </div>
                <div className="info">
                  <SeactionHeading>{`${data?.mm_name}`}</SeactionHeading>
                  <p className="small">{data?.released_date}</p>
                  <div className="type">
                    {data?.genres.map(item => (
                      <span key={item.id}>{item.name}</span>
                    ))}
                  </div>
                  <p className="small">{`IMDB - ${data?.rating}`}</p>
                </div>
              </div>
              {/* <ComponentAds img_url="/ads-detail-banner.jpg" url={ads_url} /> */}
              <ComponentAds img_url="/soulk.gif" url={ads_url} />
              <div className="description">
                <SeactionHeading>Complete Cast</SeactionHeading>
                <p>{data?.overview}</p>
                <Image
                  src={data?.backdrop_path || defaultImageCast}
                  alt={data?.name}
                  width={500}
                  height={288}
                  loading={'lazy'}
                  placeholder="blur"
                  blurDataURL="/soul-kingdom-placeholder-cast.png"
                />
              </div>

              <ComponentAds img_url="/skin-care-ads.jpeg" url={ads_url} />
              <div className="download">
                <header>
                  <h4>Download Links</h4>
                </header>
                {data?.seasons &&
                  data?.seasons.length > 0 &&
                  data?.seasons.map((season, index) => (
                    <Fragment key={season.id}>
                      {season?.episodes?.length === 0 ? (
                        <></>
                      ) : (
                        <section className="wrap-season" key={index}>
                          <h4>{`Season - ${index + 1}`}</h4>
                          <article className="download-grid">
                            {season?.episodes ? (
                              <>
                                {season?.episodes.map(episode => (
                                  <DownloadBtn
                                    alt="download button"
                                    id={season.id}
                                    in_number={episode?.in_number}
                                    key={episode.id}
                                    name={episode?.name}
                                  >
                                    <p>{`${episode?.name}`}</p>
                                  </DownloadBtn>
                                ))}
                              </>
                            ) : null}
                          </article>
                        </section>
                      )}
                    </Fragment>
                  ))}
              </div>
              <div className="share">
                <Social
                  fbLink={`${HOST_PATH}/tv_show/${data.id}` || '/'}
                  telLink={TELEGRAM_LINK || '/'}
                />
              </div>
              <ComponentAds img_url="/jdbkk2.webp" url={ads_url} />
            </section>
            <Sidebar />
          </section>
        </DetailStyles>
      )}
    </MainContent>
  );
};

export async function getServerSideProps(context: any) {
  const {
    params: { id }
  } = context;
  let error = '';
  let data = {};
  try {
    data = await fetcher(`/tv-shows/${id || 0}`);
  } catch (e: any) {
    error = e.toString();
  }
  return { props: { data, error } };
}

export default TVShowDetail;
