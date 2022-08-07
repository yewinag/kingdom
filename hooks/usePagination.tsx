import { IListingMovies, IMovies } from 'interface';
import useSWRInfinite from 'swr/infinite';
import { fetcher, ITEM_PER_PAGE, PAGE } from 'utils';
export const usePagination = (path: string) => {
  if (!path) {
    throw new Error('Path is required');
  }
  const {
    data: paginatedData,
    error,
    size,
    setSize
  } = useSWRInfinite<{ paginatedData: IListingMovies[] }>(
    index => `${path}?page=${PAGE}&limit=${ITEM_PER_PAGE}`,
    fetcher
  );
  //   const data = paginatedData && paginatedData;
  return { paginatedData, size, setSize, error };
};
