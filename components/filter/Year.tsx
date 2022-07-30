import { years } from '../../constants';
import { CardLayout } from '../common/CardLayout';

export const YearFilter = () => {
  return (
    <CardLayout>
      <>
        <h4>Release year</h4>
        <div className="year-list">
          {years.map(item => (
            <button>{item}</button>
          ))}
        </div>
      </>
    </CardLayout>
  );
};
