import { ComponentNotFound, Sidebar } from '@components';
import { IMovie } from '@interface';
import { ContentLayout, MainContent, SectionTitle } from '@styles';
import { fetcher } from '@utils';
import type { NextPage } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import useSWR from 'swr';

const Detail: NextPage = () => {
  const { query } = useRouter();
  const { data } = useSWR<IMovie, Error>(`/movies/${query.id}`, fetcher);

  return (
    <MainContent>
      {data === undefined ? (
        <ComponentNotFound />
      ) : (
        <ContentLayout>
          <section className="listing-layout">
            <section className="content-body">
              <div className="detail">
                <div className="image">
                  <Image
                    src={data?.cover_path}
                    alt={data?.name}
                    width={170}
                    height={257}
                  />
                </div>
                <div className="info">
                  <SectionTitle>{data?.name}</SectionTitle>
                </div>
              </div>
              <div className="description">
                <SectionTitle>Complete Cast</SectionTitle>
              </div>
            </section>
            <Sidebar />
          </section>
        </ContentLayout>
      )}
    </MainContent>
  );
};

// export async function getServerSideProps({ query: { id } }: IInitialProps) {
//   const data = await clientFetcher(`/movies/${id}`);
//   console.log(data);
//   return { props: { data } };
// }

export default Detail;
