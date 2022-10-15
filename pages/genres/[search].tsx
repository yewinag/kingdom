import { ComponentNotFound, ComponentSearch, Sidebar } from '@components';
import { IMovie } from '@interface';
import { ContentLayout, SectionLayout, StyledHeading } from '@styles';
import { fetcher } from '@utils';
import { useRouter } from 'next/router';
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
    query: { search }
  } = useRouter();

  const { data, error } = useSWR<IResMovie, Error>(
    `/search?filter=${search}`,
    fetcher
  );
  if (error) {
    return <ComponentNotFound />;
  }
  if (!data) {
    return <BeatLoader color={'#D12729'} />;
  }
  return (
    <ContentLayout>
      <StyledHeading>{`Results : ${data.total} Movies`}</StyledHeading>
      <section className="listing-layout">
        <section className="content-body">
          <SectionLayout>
            <ComponentSearch data={data.data} />
          </SectionLayout>
        </section>
        <Sidebar />
      </section>
    </ContentLayout>
  );
}
export default Search;
