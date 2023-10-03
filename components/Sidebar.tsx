import { IAds } from '@interface';
import { StyledSidebar } from '@styles';
import { HOST_PATH, TELEGRAM_LINK } from '@utils';

import { Genre } from './filter';
import { Social } from './Social';
interface IProps {
  adsUrl?: string;
}
export const Sidebar = ({ adsUrl }: IProps) => {
  return (
    <StyledSidebar>
      <Social fbLink={HOST_PATH || '/'} telLink={TELEGRAM_LINK || '/'} />
      <Genre adsUrl={adsUrl} />
    </StyledSidebar>
  );
};
