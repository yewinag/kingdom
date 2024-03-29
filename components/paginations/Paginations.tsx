import { LIGHT } from '@constants';
import { StyledPaginate } from '@styles';
import { IconLeft, IconRight } from 'components/icons';
import { useTheme } from 'next-themes';
import ReactPaginate from 'react-paginate';

interface IProps {
  totalPage: number;
  current: number;
  changePage: (page: number) => void;
}
interface ISelected {
  selected: number;
}
export const ComponentPagination = ({
  totalPage,
  current,
  changePage
}: IProps) => {
  const { theme } = useTheme();
  const handlePageClick = (event: ISelected) => {
    changePage(event.selected);
  };

  return (
    <StyledPaginate>
      <ReactPaginate
        breakLabel="..."
        nextLabel={<IconLeft color={theme === LIGHT ? '#000' : '#fff'} />}
        onPageChange={handlePageClick}
        pageRangeDisplayed={2}
        pageCount={totalPage}
        previousLabel={<IconRight color={theme === LIGHT ? '#000' : '#fff'} />}
        className={'paginate-layout'}
        activeClassName={'active'}
        forcePage={current}
      />
    </StyledPaginate>
  );
};
