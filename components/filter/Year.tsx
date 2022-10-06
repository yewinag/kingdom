import { years } from '../../constants';
import { CardLayout } from '../common/CardLayout';

export const YearFilter = () => {
  return (
    <CardLayout>
      <>
        <h4>Release year</h4>
        <div className="year-list scroll-bar">
          {years.map((item, index) => (
            <button key={index}>{item}</button>
          ))}
        </div>
      </>
    </CardLayout>
  );
};
