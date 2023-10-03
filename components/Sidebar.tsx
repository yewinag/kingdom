import { IAds } from '@interface';
import { StyledSidebar } from '@styles';
import { HOST_PATH, TELEGRAM_LINK } from '@utils';

import { Genre } from './filter';
import { Social } from './Social';
interface IProps {
  ads?: IAds[];
}
export const Sidebar = ({ ads }: IProps) => {
  return (
    <StyledSidebar>
      <Social fbLink={HOST_PATH || '/'} telLink={TELEGRAM_LINK || '/'} />
      <Genre ads={ads} />
    </StyledSidebar>
  );
};
