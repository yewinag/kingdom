import { StyledSidebar } from '@styles';

import { Genre } from './filter';
import { ComponentGoogleAds } from './GoogleAds';
import { Social } from './Social';

const url = window.location.href;
export const Sidebar = () => {
  return (
    <StyledSidebar>
      <Social fbLink={url || '/'} twLink={url || '/'} />
      <Genre />
      {/* <YearFilter /> */}
      <>
        {/* <h3>Spronsor</h3> */}
        {/* google ads */}
        <ComponentGoogleAds />
        <ComponentGoogleAds />
      </>
    </StyledSidebar>
  );
};
