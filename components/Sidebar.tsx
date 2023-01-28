import { StyledSidebar } from '@styles';
import { HOST_PATH, TELEGRAM_LINK } from '@utils';

import { Genre } from './filter';
// import { ComponentGoogleAds } from './GoogleAds';
import { Social } from './Social';

export const Sidebar = () => {
  return (
    <StyledSidebar>
      <Social fbLink={HOST_PATH || '/'} telLink={TELEGRAM_LINK || '/'} />
      <Genre />
      {/* <YearFilter /> */}
      <>
        {/* <h3>Spronsor</h3> */}
        {/* google ads */}
        {/* <ComponentGoogleAds /> */}
        {/* <ComponentGoogleAds /> */}
      </>
    </StyledSidebar>
  );
};
