import { IMovies } from '../interface';
import { Sidebar } from './Sidebar';
import { ComponentCard } from './common';
import { usePagination } from 'hooks';
import { ComponentPagination } from './paginations';

export default function Listing() {
  const { paginatedData, size, setSize, error } = usePagination('/api/movies');

  let result: IMovies[] = [];
  let total: number = 0;
  if (paginatedData && paginatedData.length > 0) {
    //@ts-ignore
    result = paginatedData[0]?.result;
    //@ts-ignore
    total = paginatedData[0]?.total;
  }

  if (error === 0) return <p>server မှာကွိုင်တက်နေပီ ဟကောင်ရေ</p>;
  return (
    <section className="content-list">
      <h4 className="content-title">Content Recently Added</h4>
      <section className="listing-layout">
        <section className="content-body">
          {result &&
            result.map((item, index) => (
              <ComponentCard item={item} key={index} />
            ))}
        </section>
        <Sidebar />
      </section>
      <section>
        <ComponentPagination total={total} setSize={setSize} size={size} />
      </section>
    </section>
  );
}
