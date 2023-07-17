import {
  ComponentNotFound,
  ComponentPagination,
  ComponentSearch,
  Sidebar
} from '@components';
import { genreTypes, IMovie, ISeoInfo } from '@interface';
import { ContentLayout, SectionLayout, StyledHeading } from '@styles';
import { fetcher } from '@utils';
import Footer from 'components/Footer';
import MetaTags from 'components/MetaTags';
import { GetServerSidePropsContext, NextPage } from 'next';
import { useRouter } from 'next/router';

interface IResMovie {
  data: IMovie[];
  limit: number;
  page: number;
  total: number;
  total_page: number;
}
interface IProps {
  data: IResMovie;
  error?: string;
  genre: genreTypes;
}
const Search: NextPage<IProps> = ({ data, error, genre }) => {
  const router = useRouter();

  if (error) {
    return <ComponentNotFound />;
  }

  const metaData: ISeoInfo = {
    title: `Soulkingdom - search films by the type of ${genre} Genres`,
    description: `Soulkingdom - search results films by the type of ${genre}, there are total search results ${data.total}`
  };
  const handlePage = (page: number) => {
    router.push({
      pathname: router.pathname,
      query: { genre, page: page + 1 }
    });
  };

  return (
    <>
      <ContentLayout>
        <MetaTags metaData={metaData} />
        <StyledHeading>{`Results : ${data.total} Movies`}</StyledHeading>
        <section className="listing-layout">
          <section className="content-body">
            <SectionLayout>
              <ComponentSearch data={data.data} genre={`${genre}`} />
              {data?.total_page > 1 && (
                <ComponentPagination
                  totalPage={data?.total_page}
                  changePage={handlePage}
                  current={data?.page - 1}
                />
              )}
            </SectionLayout>
          </section>
          <Sidebar />
        </section>
      </ContentLayout>
      <Footer />
    </>
  );
};

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const {
    query: { genre, page }
  } = ctx;
  let error = '';
  let data = {};
  try {
    const res = await fetcher(`/search?filter=${genre}&current=${page}`);
    data = res;
  } catch (e: any) {
    error = e.toString();
  }
  return { props: { data, error, genre } };
}
export default Search;
