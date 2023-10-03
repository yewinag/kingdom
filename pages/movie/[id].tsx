import {
  ComponentAds,
  ComponentNotFound,
  DownloadIcon,
  Sidebar
} from '@components';
import { ads_url, defaultImage, defaultImageCast } from '@constants';
import { IAds, IMovieDetail, ISeoInfo } from '@interface';
import {
  DetailStyles,
  FlexCenter,
  MainContent,
  SeactionHeading
} from '@styles';
import { fetcher, HOST_PATH, TELEGRAM_LINK } from '@utils';
import MetaTags from 'components/MetaTags';
import { Social } from 'components/Social';
import { enumAds } from 'interface/enum';
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
  ads?: IAds[];
}
const Detail: NextPage<IProps> = ({ data, error, link, ads }) => {
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

  const one = ads?.find(ads => ads.name === enumAds.WEB_DETAIL_FIRST_BANNER);
  const two = ads?.find(ads => ads.name === enumAds.WEB_DETAIL_SECOND_BANNER);
  const three = ads?.find(ads => ads.name === enumAds.WEB_DETAIL_THIRD_BANNER);
  const four = ads?.find(ads => ads.name === enumAds.WEB_DETAIL_FORTH_ANNER);

  return (
    <MainContent>
      <DetailStyles>
        <MetaTags metaData={metaData} />
        <section className="listing-layout">
          <section className="content-body">
            <ComponentAds img_url={one?.image} url={ads_url} />
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
                blurDataURL="/soul-kingdom-placeholder-cast.png"
                loading={'lazy'}
                placeholder="blur"
              />
            </div>
            <ComponentAds img_url={three?.image} url={ads_url} />
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
            <ComponentAds img_url={four?.image} url={ads_url} />
          </section>
          <Sidebar ads={ads} />
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
  let ads = {};
  let link: IResLinks = { drive_url: '' };
  try {
    const [movie, reslink, resAds] = await Promise.all([
      fetcher(`/movies/${id || 0}`),
      fetcher(`/shows/${id || 0}/download-links`),
      fetcher('/ads')
    ]);
    data = movie;
    link = reslink;
    ads = resAds;
  } catch (e: any) {
    error = e.toString();
  }
  return { props: { data, error, link, ads } };
}

export default Detail;
