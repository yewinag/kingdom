import { ComponentNotFound, Sidebar } from '@components';
import { TOKEN } from '@configs';
import { defaultImage } from '@constants';
import { IDownloadLinks, IMovieDetail, ISeoInfo } from '@interface';
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
import Link from 'next/link';
import { useRouter } from 'next/router';
import Script from 'next/script';
import { BeatLoader } from 'react-spinners';
import useSWR from 'swr';
interface IResLinks {
  download_links: IDownloadLinks;
}

const TVShowDetail: NextPage = () => {
  const {
    query: { id }
  } = useRouter();

  const { data, error } = useSWR<IMovieDetail, Error>(
    `/tv-shows/${id}`,
    fetcher
  );
  const { data: res } = useSWR<IResLinks | undefined, Error>(
    [`/shows/${id}/download-links`, { headers: { Authorization: TOKEN } }],
    fetcher
  );
  const metaData: ISeoInfo = {
    title: `အသေစိပ်ကြည့်ရှု့မှု ဇတ်ကားဧ် နာမည် ${data?.name}`,
    description: `ရှာဖွေမှု ရလဒ်ဧ် အသေးစိတ်အချက်အလက်များဖော်ပြချက် အချင်းခြုံ ${data?.overview}`
  };
  <Script strategy="lazyOnload" id="soulkingdom-id">
    {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-27VRMK3PV7', {
          page_title: ${data?.name},
          });
        `}
  </Script>;
  if (error) {
    return <ComponentNotFound />;
  }
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
                  <SeactionHeading>{data?.name}</SeactionHeading>
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
                  src={data?.backdrop_path || defaultImage}
                  alt={data?.name}
                  width={257}
                  height={170}
                  loading={'lazy'}
                />
              </div>
              <div className="download">
                {/* <SeactionHeading>Download Links</SeactionHeading> */}
                <header>
                  <h4>Download Links</h4>
                  <h4>Quality</h4>
                </header>
                <article>
                  <Link href={res?.download_links['360p'] || '/'}>
                    <a target="_blank">
                      <div className="link-title">
                        <p>Option 1</p>
                        <p>360p</p>
                      </div>
                    </a>
                  </Link>
                  <Link href={res?.download_links['480p'] || '/'}>
                    <a target="_blank">
                      <div className="link-title">
                        <p>Option 2</p>
                        <p>480p</p>
                      </div>
                    </a>
                  </Link>
                  <Link href={res?.download_links['720p'] || '/'}>
                    <a target="_blank">
                      <div className="link-title">
                        <p>Option 3</p>
                        <p>720p</p>
                      </div>
                    </a>
                  </Link>
                  <Link href={res?.download_links['1080p'] || '/'}>
                    <a target="_blank">
                      <div className="link-title">
                        <p>Option 4</p>
                        <p>1080p</p>
                      </div>
                    </a>
                  </Link>
                </article>
              </div>
              <div className="share">
                <Social
                  fbLink={`${HOST_PATH}/movie/${id}` || '/'}
                  twLink={`${HOST_PATH}/movie/${id}` || '/'}
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
