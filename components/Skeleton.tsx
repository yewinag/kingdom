import 'react-loading-skeleton/dist/skeleton.css';

import { LIGHT } from '@constants';
import { useTheme } from 'next-themes';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import styled from 'styled-components';

export const ComponentSkeleton = () => {
  const { theme } = useTheme();
  const baseColor = theme === LIGHT ? '#ddd' : '#7a8293';
  const highlight = theme === LIGHT ? '#eee' : '#59637E';
  return (
    <SkeletonTheme baseColor={baseColor} highlightColor={highlight}>
      <StyledSkeleton>
        <Skeleton style={{ height: '194px', marginBottom: '4px' }} />
        <Skeleton count={2} />
      </StyledSkeleton>
    </SkeletonTheme>
  );
};
export const ComponentPlaceholder = () => (
  <>
    <ComponentSkeleton />
    <ComponentSkeleton />
    <ComponentSkeleton />
    <ComponentSkeleton />
    <ComponentSkeleton />
  </>
);
const StyledSkeleton = styled.div`
  width: 126px;
`;
