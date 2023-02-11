// import Script from 'next/script';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
interface IProps {
  client: string;
  slot: string;
  currentPath: string;
}
export const ComponentGoogleAds = ({ client, slot, currentPath }: IProps) => {
  const [mount, setMount] = useState(false);
  useEffect(() => {
    setMount(true);
    if (mount) {
      window.adsbygoogle = window.adsbygoogle || [];
      window.adsbygoogle.push({});
    }
  }, [currentPath]);
  return (
    <StyledAds>
      <div key={currentPath} className="ads-layout">
        <ins
          className="adsbygoogle"
          style={{ display: 'block' }}
          data-ad-client={client}
          data-ad-slot={slot}
        ></ins>
      </div>
    </StyledAds>
  );
};

const StyledAds = styled.div`
  width: 100%;
  min-height: 120px;
  background: transparent;
  .ads-layout {
    margin: auto;
    min-height: 100px;
  }
`;
