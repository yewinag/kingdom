import { StyledSidebar } from '@styles';
import {
  BIG_ASID,
  CLIENT_KEY,
  HOST_PATH,
  SMALL_ASID,
  TELEGRAM_LINK
} from '@utils';

import { Genre } from './filter';
import { ComponentGoogleAds } from './GoogleAds';
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
        <ComponentGoogleAds
          client={CLIENT_KEY}
          slot={SMALL_ASID}
          currentPath="asid"
        />
        <ComponentGoogleAds
          client={CLIENT_KEY}
          slot={BIG_ASID}
          currentPath="asid-big"
        />
      </>
    </StyledSidebar>
  );
};
