import Image from 'next/image';
import styled from 'styled-components';
interface IProps {
  url?: string;
  img_url?: string;
}
export const ComponentAds = ({ url, img_url }: IProps) => {
  return (
    <StyledAds>
      <a href={url} target="_blank" rel="noreferrer">
        <Image src={img_url || ''} alt={img_url} layout="fill" />
      </a>
    </StyledAds>
  );
};
export const ComponentVideoAds = ({ url, img_url }: IProps) => {
  return (
    <StyledVideo>
      <a href={url} target="_blank" rel="noreferrer">
        <video loop autoPlay muted>
          <source src={img_url || ''} type="video/mp4" />
        </video>
      </a>
    </StyledVideo>
  );
};
export const ComponentSidebarAds = ({ url, img_url }: IProps) => {
  return (
    <StyledSidebarAds>
      <a href={url} target="_blank" rel="noreferrer">
        <Image src={img_url || ''} alt={img_url} layout="fill" />
      </a>
    </StyledSidebarAds>
  );
};

const StyledAds = styled.div`
  width: 100%;
  height: 90px;
  position: relative;
  padding: 8px 4px;
  background: transparent;
  img {
    margin: auto;
  }
  @media (max-width: ${p => p.theme.breakPoints.s_tablet}) {
    height: 60px;
  }
`;

const StyledVideo = styled.div`
  video {
    width: 100%;
    min-height: auto;
  }

  background: transparent;
`;
const StyledSidebarAds = styled.div`
  width: 100%;
  height: 500px;
  padding: 8px 4px;
  background: transparent;
  position: relative;
  img {
    margin: auto;
  }
`;
