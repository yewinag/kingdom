import { StyledSidebar } from '@styles';
import { HOST_PATH, TELEGRAM_LINK } from '@utils';

import { Genre } from './filter';
import { Social } from './Social';

export const Sidebar = () => {
  return (
    <StyledSidebar>
      <Social fbLink={HOST_PATH || '/'} telLink={TELEGRAM_LINK || '/'} />
      <Genre />
    </StyledSidebar>
  );
};
