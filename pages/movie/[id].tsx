import { ComponentNotFound, Sidebar } from '@components';
import { IMovieDetail } from '@interface';
import { MainContent, SeactionHeading } from '@styles';
import { fetcher } from '@utils';
import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import useSWR from 'swr';

const Detail: NextPage = () => {
  const {
    query: { id }
  } = useRouter();
  const { data } = useSWR<IMovieDetail, Error>(`/movies/${id}`, fetcher);
  return (
    <MainContent>
      {data === undefined ? (
        <ComponentNotFound />
      ) : (
        <DetailStyles>
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
                  src={data?.backdrop_path}
                  alt={data?.name}
                  width={257}
                  height={170}
                  loading={'lazy'}
                />
              </div>
              <div className="download">
                <SeactionHeading>Download Links</SeactionHeading>
                <article>
                  <Link href={'/download'}>
                    <a>
                      <span>Option 1</span>
                      <span>---</span>
                      <span>---</span>
                      <span>---</span>
                    </a>
                  </Link>
                </article>
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

const DetailStyles = styled.div`
  .listing-layout {
    display: flex;
    align-items: flex-start;
  }
  .content-body {
    width: 740px;
    padding: 0 20px;
    border-right: solid 1px ${p => p.theme.border};
  }
  .content-body {
    display: flex;
    flex-direction: column;
    row-gap: ${p => p.theme.space['32']};
    .detail {
      padding: ${p => p.theme.space['16']};
      background: ${p => p.theme.secondary_500};
      display: flex;
      column-gap: ${p => p.theme.space['20']};
      border-radius: ${p => p.theme.space['4']};
      .info {
        display: flex;
        flex-direction: column;
        row-gap: 10px;
        .small {
          font-style: italic;
          font-size: ${p => p.theme.fontSizes.small};
        }
        .type {
          display: flex;
          column-gap: 4px;
          span {
            font-size: ${p => p.theme.fontSizes.small};
            padding: 4px 6px;
            border-radius: 4px;
            border: 0.5px solid ${p => p.theme.text_600};
            cursor: pointer;
          }
        }
      }
    }
    .description {
      display: flex;
      flex-direction: column;
      row-gap: ${p => p.theme.space['20']};
      align-items: baseline;
      background: ${p => p.theme.secondary_500};
      padding: ${p => p.theme.space['16']};
      border-radius: ${p => p.theme.space['4']};
    }
    .download {
      display: flex;
      flex-direction: column;
      row-gap: ${p => p.theme.space['20']};
      align-items: baseline;
      background: ${p => p.theme.secondary_500};
      padding: ${p => p.theme.space['16']};
      border-radius: ${p => p.theme.space['4']};
    }
  }
`;
