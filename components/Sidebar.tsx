import { StyledSidebar } from '@styles';
import { HOST_PATH } from '@utils';

import { Genre } from './filter';
import { ComponentGoogleAds } from './GoogleAds';
import { Social } from './Social';

export const Sidebar = () => {
  return (
    <StyledSidebar>
      <Social fbLink={HOST_PATH || '/'} twLink={HOST_PATH || '/'} />
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
