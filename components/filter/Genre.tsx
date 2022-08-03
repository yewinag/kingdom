import { categories } from '../../constants';
import { CardLayout } from '../common/CardLayout';

export const Genre = () => {
  return (
    <CardLayout>
      <>
        <h4>Genres</h4>
        <div className="genre-list scroll-bar">
          {categories.map((item, index) => (
            <div className="genre-item" key={index}>
              <p>{item.title}</p>
              <p>{item.count}</p>
            </div>
          ))}
        </div>
      </>
    </CardLayout>
  );
};
