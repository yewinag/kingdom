import {
  ComponentNotFound,
  ComponentPagination,
  ComponentSearch,
  Sidebar
} from '@components';
import { initPage } from '@constants';
import { IMovie, ISeoInfo } from '@interface';
import {
  ContentLayout,
  FlexCenter,
  SectionLayout,
  StyledHeading
} from '@styles';
import { fetcher } from '@utils';
import MetaTags from 'components/MetaTags';
import { useRouter } from 'next/router';
import { useState } from 'react';
import BeatLoader from 'react-spinners/BeatLoader';
import useSWR from 'swr';
interface IResMovie {
  data: IMovie[];
  limit: number;
  page: number;
  total: number;
  total_page: number;
}

function Search() {
  const {
    query: { keyword }
  } = useRouter();

  const [page, setPage] = useState<number>(initPage);
  const { data, error } = useSWR<IResMovie, Error>(
    `/search?search=${keyword}&current=${page + 1}`,
    fetcher
  );
  if (error) {
    return <ComponentNotFound />;
  }
  if (!data) {
    return (
      <FlexCenter>
        <BeatLoader color={'#D12729'} />
      </FlexCenter>
    );
  }
  const metaData: ISeoInfo = {
    title: `Soulkingdom - search films by the keyword of ${keyword}`,
    description: `Soulkingdom - search results films by the keyword of ${keyword}, there are total search results ${data.total}`
  };
  return (
    <ContentLayout>
      <MetaTags metaData={metaData} />
      <StyledHeading>{`Results : ${data.total} Movies`}</StyledHeading>
      <section className="listing-layout">
        <section className="content-body">
          <SectionLayout>
            <ComponentSearch data={data.data} />
            {data?.total_page > 1 && (
              <ComponentPagination
                totalPage={data.total_page}
                changePage={page => setPage(page)}
                current={page}
              />
            )}
          </SectionLayout>
        </section>
        <Sidebar />
      </section>
    </ContentLayout>
  );
}
export default Search;
