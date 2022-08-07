import { useEffect, useState } from 'react';
import { ITEM_PER_PAGE } from 'utils';
interface IPagination {
  total: number;
  setSize: (size: number) => void;
  size: number;
}
export const ComponentPagination = (props: IPagination) => {
  const { total, setSize, size } = props;
  const [count, setCount] = useState<number[]>([]);
  const totalPage = Math.ceil(total / ITEM_PER_PAGE);
  useEffect(() => {
    setCount(Array.from(Array(totalPage).keys()));
  }, [total]);

  return (
    <article className="content-pagination">
      {totalPage > 1 && (
        <button onClick={() => setSize(size - 1)}>{'<'}</button>
      )}
      {count.map(page => (
        <button key={page} onClick={() => setSize(page + 1)}>
          {page + 1}
        </button>
      ))}
      {totalPage > 0 && (
        <button onClick={() => setSize(size + 1)}>{'>'}</button>
      )}
    </article>
  );
};
