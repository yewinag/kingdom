import {
  ComponentAds,
  // ComponentAds,
  ComponentNotFound,
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
import { useRouter } from 'next/router';
import { BeatLoader } from 'react-spinners';
import useSWR from 'swr';

const TVShowDetail: NextPage = () => {
  const {
    query: { id }
  } = useRouter();

  const { data, error } = useSWR<IMovieDetail, Error>(
    `/tv-shows/${id || 0}`,
    fetcher
  );

  if (id === undefined) {
    return (
      <FlexCenter>
        <BeatLoader color={light.primary_500} />
      </FlexCenter>
    );
  }
  if (error) {
    return <ComponentNotFound />;
  }

  const metaData: ISeoInfo = {
    title: `${data?.name} films - watch ${data?.name}  on soulkingdom `,
    description: `${data?.overview} complete cast of ${data?.name} `
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
                    <>
                      {season?.episodes?.length === 0 ? (
                        <></>
                      ) : (
                        <section className="wrap-season" key={index}>
                          <h4>{`Season - ${index + 1}`}</h4>
                          <article className="download-grid">
                            {season?.episodes ? (
                              <>
                                {season?.episodes.map((episode, index) => (
                                  <DownloadBtn
                                    alt="download button"
                                    id={season.id}
                                    in_number={episode?.in_number}
                                    key={index}
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
                    </>
                  ))}
              </div>
              <div className="share">
                <Social
                  fbLink={`${HOST_PATH}/tv_show/${id}` || '/'}
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

export default TVShowDetail;
