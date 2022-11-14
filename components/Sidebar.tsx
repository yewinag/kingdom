import { StyledSidebar } from '@styles';

import { Genre } from './filter';
import { ComponentGoogleAds } from './GoogleAds';
import { Social } from './Social';

export const Sidebar = () => {
  return (
    <StyledSidebar>
      <Social />
      <Genre />
      {/* <YearFilter /> */}
      <>
        {/* <h3>Spronsor</h3> */}
        {/* google ads */}
        <ComponentGoogleAds client="" slot="" />
        <ComponentGoogleAds client="" slot="" />
      </>
    </StyledSidebar>
  );
};
