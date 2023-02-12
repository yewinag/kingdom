import { ComponentNotFound, DownloadIcon, Sidebar } from '@components';
import { defaultImage, defaultImageCast } from '@constants';
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
import { BeatLoader } from 'react-spinners';
import useSWR from 'swr';
interface IResLinks {
  drive_url: string;
}
const Detail: NextPage = () => {
  const {
    query: { id }
  } = useRouter();

  const { data, error } = useSWR<IMovieDetail, Error>(
    `/movies/${id || 0}`,
    fetcher
  );
  const { data: res } = useSWR<IResLinks | undefined, Error>(
    [`/shows/${id || 0}/download-links`],
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
    title: `${data?.name} - watching ${data?.name} on Soulkingdom`,
    description: `Soulkingdom - watching overview ${data?.overview} of film ${data?.name}`
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
                    src={data?.cover_path || defaultImage}
                    alt={data?.name}
                    width={160}
                    height={237}
                    loading={'lazy'}
                  />
                </div>
                <div className="info">
                  <SeactionHeading>
                    {data?.mm_name || data?.name}
                  </SeactionHeading>
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
                {/* <SeactionHeading>Download Links</SeactionHeading> */}
                <header>
                  <h4>Download Links</h4>
                  {/* <h4>Quality</h4> */}
                </header>
                <article>
                  <Link href={res?.drive_url || '/'}>
                    <a target="_blank">
                      <div className="link-title">
                        <p className="download-icon">
                          <DownloadIcon />
                          Option 1
                        </p>
                        {/* <p>---</p> */}
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
            </section>
            <Sidebar />
          </section>
        </DetailStyles>
      )}
    </MainContent>
  );
};

export default Detail;
