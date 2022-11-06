import {
  ComponentNotFound,
  ComponentPagination,
  ComponentSearch,
  Sidebar
} from '@components';
import { initPage } from '@constants';
import { IMovie } from '@interface';
import {
  ContentLayout,
  FlexCenter,
  SectionLayout,
  StyledHeading
} from '@styles';
import { fetcher } from '@utils';
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
    `/search?search=${keyword}&page=${page}`,
    fetcher
  );
  if (error) {
    return <ComponentNotFound />;
  }
  if (!data) {
    return (
      <FlexCenter>
        <BeatLoader color={'#D12729'} />;
      </FlexCenter>
    );
  }
  return (
    <ContentLayout>
      <StyledHeading>{`Results : ${data.total} Movies`}</StyledHeading>
      <section className="listing-layout">
        <section className="content-body">
          <SectionLayout>
            <ComponentSearch data={data.data} />
            {data?.total_page > 1 && (
              <ComponentPagination
                totalPage={data.total_page}
                changePage={page => setPage(page)}
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
