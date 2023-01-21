import { ComponentNotFound, DownloadBtn, Sidebar } from '@components';
import { defaultImageCast } from '@constants';
import { IMovieDetail, ISeoInfo } from '@interface';
import {
  DetailStyles,
  FlexCenter,
  MainContent,
  SeactionHeading
} from '@styles';
import { fetcher, HOST_PATH, light } from '@utils';
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
                    alt={data?.name}
                    width={160}
                    height={237}
                    loading={'lazy'}
                  />
                </div>
                <div className="info">
                  <SeactionHeading>{data?.mm_name}</SeactionHeading>
                  <p className="small">{data?.released_date}</p>
                  <div className="type">
                    {data?.genres.map((item, index) => (
                      <span key={index}>{item.name}</span>
                    ))}
                  </div>
                  <p className="small">{`IMDB - ${data?.rating}`}</p>
                </div>
              </div>
              <div className="description">
                <SeactionHeading>Complete Cast</SeactionHeading>
                <p>{data?.overview}</p>
                <Image
                  src={data?.backdrop_path || defaultImageCast}
                  alt={data?.name}
                  width={500}
                  height={288}
                  loading={'lazy'}
                />
              </div>
              <div className="download">
                <header>
                  <h4>Download Links</h4>
                  <h4>Quality</h4>
                </header>
                <article className="download-grid">
                  {data?.seasons?.map((episode, index) => (
                    <DownloadBtn
                      alt="download button"
                      id={episode?.id}
                      episode={index + 1}
                      key={index}
                    >
                      <p>{`Episode ${index + 1}`}</p>
                    </DownloadBtn>
                  ))}
                </article>
              </div>
              <div className="share">
                <Social
                  fbLink={`${HOST_PATH}/tv_show/${id}` || '/'}
                  twLink={`${HOST_PATH}/tv_show/${id}` || '/'}
                />
              </div>
            </section>
            <Sidebar />
          </section>
        </DetailStyles>
      )}
    </MainContent>
  );
};

export default TVShowDetail;
