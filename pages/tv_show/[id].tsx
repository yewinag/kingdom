import {
  ComponentNotFound,
  ComponentVideoAds,
  DownloadBtn,
  Sidebar
} from '@components';
import { ads_url, defaultImageCast } from '@constants';
import { IMovieDetail, ISeasonEpisode, ISeoInfo } from '@interface';
import {
  DetailStyles,
  FlexCenter,
  MainContent,
  SeactionHeading
} from '@styles';
import {
  fetcher,
  generateEpisodesByNumber,
  HOST_PATH,
  light,
  TELEGRAM_LINK
} from '@utils';
import MetaTags from 'components/MetaTags';
import { Social } from 'components/Social';
import type { NextPage } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { BeatLoader } from 'react-spinners';
import useSWR from 'swr';

const TVShowDetail: NextPage = () => {
  const {
    query: { id }
  } = useRouter();
  const [seasons, setSeasons] = useState<ISeasonEpisode[]>([]);
  const [movie, setMovie] = useState<IMovieDetail>();
  const { data, error } = useSWR<IMovieDetail, Error>(
    `/tv-shows/${id || 0}`,
    fetcher
  );

  useEffect(() => {
    fetchMovieAgain();
  }, [error]);

  const fetchMovieAgain = async () => {
    try {
      const res = await fetcher(`/tv-shows/${id || 0}`);
      setMovie(res);
    } catch (err: any) {
      throw new Error(err);
    }
  };
  const used = data || movie;
  useEffect(() => {
    const generateEpisodes = () => {
      const formatEpisode: ISeasonEpisode[] = [];
      used?.seasons?.map(async season => {
        const episode = await generateEpisodesByNumber(season?.total_episodes);
        formatEpisode.push({
          id: season.id,
          episodes: episode
        });
      });
      setSeasons(formatEpisode);
    };
    if (used) {
      generateEpisodes();
    }
  }, [used]);

  if (error) {
    return (
      <>
        <div>
          {JSON.stringify(error?.message)}
          <ComponentNotFound />
        </div>
      </>
    );
  }

  const metaData: ISeoInfo = {
    title: `${used?.name} films - watch ${used?.name}  on soulkingdom `,
    description: `${used?.overview} complete cast of ${used?.name} `
  };
  return (
    <MainContent>
      {used === undefined ? (
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
                    src={used?.cover_path}
                    alt={used?.name}
                    width={160}
                    height={237}
                    loading={'lazy'}
                    placeholder="blur"
                    blurDataURL="/soul-kingdom-placeholder-cast.png"
                  />
                </div>
                <div className="info">
                  <SeactionHeading>{`${used?.name} ( ${used?.mm_name} )`}</SeactionHeading>
                  <p className="small">{used?.released_date}</p>
                  <div className="type">
                    {used?.genres.map((item, index) => (
                      <span key={index}>{item.name}</span>
                    ))}
                  </div>
                  <p className="small">{`IMDB - ${used?.rating}`}</p>
                </div>
              </div>
              <ComponentVideoAds img_url="/shan9-vip.mp4" url={ads_url} />
              <div className="description">
                <SeactionHeading>Complete Cast</SeactionHeading>
                <p>{used?.overview}</p>
                <Image
                  src={used?.backdrop_path || defaultImageCast}
                  alt={used?.name}
                  width={500}
                  height={288}
                  loading={'lazy'}
                  placeholder="blur"
                  blurDataURL="/soul-kingdom-placeholder-cast.png"
                />
              </div>
              <ComponentVideoAds img_url="/taung-paw-thar.mp4" url={ads_url} />
              <div className="download">
                <header>
                  <h4>Download Links</h4>
                </header>
                {seasons.length > 0 &&
                  seasons.map((season, index) => (
                    <section className="wrap-season" key={index}>
                      <h4>{`Season - ${index + 1}`}</h4>
                      <article className="download-grid">
                        {season.episodes.map((episode, index) => (
                          <DownloadBtn
                            alt="download button"
                            id={season.id}
                            episode={episode}
                            key={index}
                          >
                            <p>{`Episode ${episode}`}</p>
                          </DownloadBtn>
                        ))}
                      </article>
                    </section>
                  ))}
              </div>
              <div className="share">
                <Social
                  fbLink={`${HOST_PATH}/tv_show/${id}` || '/'}
                  telLink={TELEGRAM_LINK || '/'}
                />
              </div>
              <ComponentVideoAds img_url="/shan9-vip.mp4" url={ads_url} />
            </section>
            <Sidebar />
          </section>
        </DetailStyles>
      )}
    </MainContent>
  );
};

export default TVShowDetail;
