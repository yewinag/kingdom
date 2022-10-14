import { ComponentCard, ComponentNotFound, Sidebar } from '@components';
import { IMovie } from '@interface';
import { fetcher } from '@utils';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import BeatLoader from 'react-spinners/BeatLoader';
import {
  ContentLayout,
  SearchListing,
  SectionLayout,
  StyledHeading
} from '@styles';

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
  const { data, error } = useSWR<IResMovie, Error>(
    `/search?search=${keyword}`,
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
            <SearchListing>
              {data &&
                data.data.map((item, index) => (
                  <ComponentCard item={item} key={index} />
                ))}
            </SearchListing>
          </SectionLayout>
        </section>
        <Sidebar />
      </section>
    </ContentLayout>
  );
}
export default Search;
