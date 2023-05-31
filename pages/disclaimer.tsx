import { Sidebar } from '@components';
import { ISeoInfo } from '@interface';
import {
  ContentLayout,
  InfoPageStyles,
  SectionLayout,
  StyledHeading
} from '@styles';
import MetaTags from 'components/MetaTags';

function DisclaimerPage() {
  const metaData: ISeoInfo = {
    title: `Soulkingdom - disclaimer about soulkingdom`,
    description: `soulkingdom - disclaimer from soulkingdom websites explanation`
  };
  return (
    <ContentLayout>
      <MetaTags metaData={metaData} />
      <StyledHeading>{`Disclaimer`}</StyledHeading>
      <section className="listing-layout">
        <section className="content-body">
          <SectionLayout>
            <InfoPageStyles>
              <p>
                SoulKingdom is an information-based website that collects and
                displays data related to Asian Oriental multimedia, to include
                artist information, celebrity profiles, movie information, and
                drama series information. The information we present on this
                website is for general information purposes only. It is intended
                to be a library cataloging such info for entertainment purposes
                only.
              </p>
              <p>
                SoulKingdom are not affiliated with any of the video content and
                none of the video content are held on our servers. SoulKingdom
                does use YouTube content to showcase trailers, previews, and
                video news articles which are allowed as fair use under the DMCA
                copyright law.
              </p>
              <p>
                Every effort is made to keep the website up and running
                smoothly. However, SoulKingdom takes no responsibility for the
                website being temporarily unavailable due to technical issues
                beyond our control.
              </p>
            </InfoPageStyles>
          </SectionLayout>
        </section>
        <Sidebar />
      </section>
    </ContentLayout>
  );
}

export default DisclaimerPage;
