import { categories } from '../../constants';
import { CardLayout } from '../common/CardLayout';

export const Genre = () => {
  return (
    <CardLayout>
      <>
        <h4>Genres</h4>
        <div className="genre-list">
          {categories.map(item => (
            <div className="genre-item">
              <p>{item.title}</p>
              <p>{item.count}</p>
            </div>
          ))}
        </div>
      </>
    </CardLayout>
  );
};
