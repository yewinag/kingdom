import { years } from '@constants';
import { StyledYear } from '@styles';

export const YearFilter = () => {
  return (
    <StyledYear>
      <h4>Release year</h4>
      <div className="year-list scroll-bar">
        {years.map((item, index) => (
          <button key={index}>{item}</button>
        ))}
      </div>
    </StyledYear>
  );
};
