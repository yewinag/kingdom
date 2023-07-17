import {
  ComponentNotFound,
  ComponentPagination,
  ComponentSearch,
  Sidebar
} from '@components';
import { IMovie, ISeoInfo } from '@interface';
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
  keyword: string;
}
const Search: NextPage<IProps> = ({ data, error, keyword }) => {
  const router = useRouter();

  if (error) {
    return <ComponentNotFound />;
  }
  const metaData: ISeoInfo = {
    title: `Soulkingdom - search films by the keyword of ${keyword}`,
    description: `Soulkingdom - search results films by the keyword of ${keyword}, there are total search results ${data.total}`
  };

  const handlePage = (page: number) => {
    router.push({
      pathname: router.pathname,
      query: { keyword, page: page + 1 }
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
              <ComponentSearch data={data.data} />
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
    query: { keyword, page }
  } = ctx;
  let error = '';
  let data = {};
  try {
    const res = await fetcher(`/search?search=${keyword}&current=${page}`);
    data = res;
  } catch (e: any) {
    error = e.toString();
  }
  return { props: { data, error, keyword } };
}
export default Search;
