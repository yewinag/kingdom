import { PATH_GENRES } from '@constants';
import { FlexCenter, StyledGenres } from '@styles';
import { fetcher } from '@utils';
import { ComponentNotFound } from 'components/NotFound';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { BeatLoader } from 'react-spinners';
import useSWR from 'swr';

export const Genre = () => {
  const {
    query: { search }
  } = useRouter();

  const { data, error } = useSWR<any, Error>(`/show-total`, fetcher);

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
    <StyledGenres>
      <h4>Genres</h4>
      <div className="genre-list scroll-bar">
        {data.length > 0 &&
          data.map((item: any, index: any) => (
            <Link href={`${PATH_GENRES}${Object.keys(item)}`} key={index}>
              <a>
                <div
                  className={
                    Object.keys(item)[0] === search
                      ? 'genre-item active'
                      : 'genre-item'
                  }
                >
                  <p>{Object.keys(item)}</p>
                  <p>{Object.values(item)}</p>
                </div>
              </a>
            </Link>
          ))}
      </div>
    </StyledGenres>
  );
};
