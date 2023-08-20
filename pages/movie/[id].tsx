import {
  ComponentAds,
  ComponentNotFound,
  ComponentVideoAds,
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
import { fetcher, HOST_PATH, TELEGRAM_LINK } from '@utils';
import MetaTags from 'components/MetaTags';
import { Social } from 'components/Social';
import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
interface IResLinks {
  drive_url: string;
}
interface IProps {
  data: IMovieDetail;
  error?: string;
  link?: IResLinks;
}
const Detail: NextPage<IProps> = ({ data, error, link }) => {
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
    title: `${data?.mm_name} - watching ${data?.mm_name} on Soulkingdom`,
    description: `Soulkingdom - watching overview ${data?.overview} of film ${data?.mm_name}`
  };

  return (
    <MainContent>
      <DetailStyles>
        <MetaTags metaData={metaData} />
        <section className="listing-layout">
          <section className="content-body">
            {/* <ComponentVideoAds img_url="/final.gif.mp4" url={ads_url} /> */}
            <ComponentAds img_url="/final.gif" url={ads_url} />
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
                  {data?.genres?.map((item, index) => (
                    <span key={index}>{item.name}</span>
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
                fbLink={`${HOST_PATH}/movie/${data?.id}` || '/'}
                telLink={TELEGRAM_LINK || '/'}
              />
            </div>
            <ComponentAds img_url="/jdbkk2.webp" url={ads_url} />
          </section>
          <Sidebar />
        </section>
      </DetailStyles>
    </MainContent>
  );
};

export async function getServerSideProps(context: any) {
  const {
    params: { id }
  } = context;
  let error = '';
  let data = {};
  let link: IResLinks = { drive_url: '' };
  try {
    const [movie, reslink] = await Promise.all([
      fetcher(`/movies/${id || 0}`),
      fetcher(`/shows/${id || 0}/download-links`)
    ]);
    data = movie;
    link = reslink;
  } catch (e: any) {
    error = e.toString();
  }
  return { props: { data, error, link } };
}

export default Detail;
