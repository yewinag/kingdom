import {
  ComponentAds,
  ComponentNotFound,
  DownloadBtn,
  Sidebar
} from '@components';
import { ads_url, defaultImageCast } from '@constants';
import { IAds, IMovieDetail, ISeoInfo } from '@interface';
import {
  DetailStyles,
  FlexCenter,
  MainContent,
  SeactionHeading
} from '@styles';
import { fetcher, HOST_PATH, light, TELEGRAM_LINK } from '@utils';
import MetaTags from 'components/MetaTags';
import { Social } from 'components/Social';
import { enumAds } from 'interface/enum';
import type { NextPage } from 'next';
import Image from 'next/image';
import { Fragment } from 'react';
import { BeatLoader } from 'react-spinners';

interface IProps {
  data: IMovieDetail;
  error?: string;
  ads?: IAds[];
}

const TVShowDetail: NextPage<IProps> = ({ data, error, ads }) => {
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

  const one = ads?.find(ads => ads.name === enumAds.WEB_DETAIL_FIRST_BANNER);
  const two = ads?.find(ads => ads.name === enumAds.WEB_DETAIL_SECOND_BANNER);
  const three = ads?.find(ads => ads.name === enumAds.WEB_DETAIL_THIRD_BANNER);
  const four = ads?.find(ads => ads.name === enumAds.WEB_DETAIL_FORTH_ANNER);

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
              <ComponentAds img_url={one?.image} url={ads_url} />
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
                  {data.casts.length > 0 && (
                    <div>
                      <p>{`Cast`}</p>
                      <div
                        className="casts"
                        style={{ display: 'flex', flexWrap: 'wrap' }}
                      >
                        {data.casts.map((cast, index) => (
                          <p key={index} className="small">
                            {cast.name}
                            {index + 1 !== data.casts.length && <span>,</span>}
                            &nbsp;
                          </p>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <ComponentAds img_url={two?.image} url={ads_url} />
              <div className="description">
                <SeactionHeading>Review</SeactionHeading>
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
              <ComponentAds img_url={three?.image} url={ads_url} />
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
                            {season?.ost ? (
                              <>
                                {season?.ost.map(episode => (
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
                          <br />
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
              <ComponentAds img_url={four?.image} url={ads_url} />
            </section>
            <Sidebar ads={ads} />
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
  let ads = {};
  try {
    const [movie, resAds] = await Promise.all([
      fetcher(`/tv-shows/${id || 0}`),
      fetcher('/ads')
    ]);
    data = movie;
    ads = resAds;
  } catch (e: any) {
    error = e.toString();
  }
  return { props: { data, error, ads } };
}

export default TVShowDetail;
