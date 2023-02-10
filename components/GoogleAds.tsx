import Script from 'next/script';
import { useEffect } from 'react';
import styled from 'styled-components';
// interface IProps {
//   client: string;
//   slot: string;
// }
export const ComponentGoogleAds = () => {
  useEffect(() => {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }, []);
  return (
    <StyledAds>
      <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
      />
      <div className="ads-layout">
        <ins
          className="adsbygoogle"
          style={{ display: 'block' }}
          data-ad-client={'ca-pub-1237749281691432'}
          data-ad-slot={'9631928922'}
          data-ad-format="auto"
          data-full-width-responsive="true"
        ></ins>
      </div>
    </StyledAds>
  );
};

const StyledAds = styled.div`
  width: 100%;
  min-height: 120px;

  background: #ddd;
  .ads-layout {
    margin: auto;
    /* width: 750px; */
    min-height: 100px;
  }
`;
