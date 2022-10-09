import { CardLayout } from '@components';
import { years } from '@constants';

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
