import { Sidebar } from '@components';
import { ISeoInfo } from '@interface';
import {
  ContentLayout,
  InfoPageStyles,
  SectionLayout,
  StyledHeading
} from '@styles';
import MetaTags from 'components/MetaTags';

function AboutPage() {
  const metaData: ISeoInfo = {
    title: `Soulkingdom - explanation how to download the films from soulkingdom`,
    description: `soulkingdom - download the films from soulkingdom websites explanation`
  };
  return (
    <ContentLayout>
      <MetaTags metaData={metaData} />
      <StyledHeading>{`About Us`}</StyledHeading>
      <section className="listing-layout">
        <section className="content-body">
          <SectionLayout>
            <InfoPageStyles>
              {/* <PageHeading>{`About Us`}</PageHeading> */}

              <p>
                We are a group of people who love movies ‌and series. We created
                a movies and series directory on this site so that movie and
                series lovers can easily find their favorite movie stories.
              </p>
              <p>
                The content is neither created nor owned by us, it is just only
                shared.
              </p>
              <p>
                You can also reach us by Facebook page and Telegram channels.
              </p>
              <p>
                If you want to know more details, you can contact the following
                Telegram account
              </p>
            </InfoPageStyles>
          </SectionLayout>
        </section>
        <Sidebar />
      </section>
    </ContentLayout>
  );
}

export default AboutPage;
