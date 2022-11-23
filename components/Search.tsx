import { IMovie } from '@interface';
import { SearchListing } from '@styles';

import { ComponentCard } from './common';

interface IProps {
  data?: IMovie[];
  genre?: string;
}
export const ComponentSearch = (props: IProps) => {
  const { data, genre } = props;
  return (
    <SearchListing>
      {data &&
        data.map((item, index) => (
          <ComponentCard item={item} key={index} genre={genre} />
        ))}
    </SearchListing>
  );
};
