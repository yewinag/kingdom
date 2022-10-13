import { StyledGenres } from '@styles';

import { categories } from '../../constants';

export const Genre = () => {
  return (
    <StyledGenres>
      <h4>Genres</h4>
      <div className="genre-list scroll-bar">
        {categories.map((item, index) => (
          <div className="genre-item" key={index}>
            <p>{item.title}</p>
            <p>{item.count}</p>
          </div>
        ))}
      </div>
    </StyledGenres>
  );
};
