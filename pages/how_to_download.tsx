import { Sidebar } from '@components';
import { ISeoInfo } from '@interface';
import {
  ContentLayout,
  InfoPageStyles,
  PageHeading,
  SectionLayout,
  StyledHeading
} from '@styles';
import MetaTags from 'components/MetaTags';

function PageHowToDownload() {
  const metaData: ISeoInfo = {
    title: `Soulkingdom - explanation how to download the films from soulkingdom`,
    description: `soulkingdom - download the films from soulkingdom websites explanation`
  };
  return (
    <ContentLayout>
      <MetaTags metaData={metaData} />
      <StyledHeading>{`HOW TO DOWNLOAD`}</StyledHeading>
      <section className="listing-layout">
        <section className="content-body">
          <SectionLayout>
            <InfoPageStyles>
              <PageHeading>
                Soulkingdom မှ Video Download နည်းများ (နမူနာဒေါင်းပြထားတဲ့
                Video တွေကိုအောက်ဆုံးမှာသွားကြည့်လို့ပါတယ်။)
                ==========================
              </PageHeading>
              <p>
                www.soulkingdom.net
                ကိုသွားပါ။ကိုယ်ဒေါင်းချင်တဲ့ဇာတ်ကားကိုရွေးပါ။ အောက်ဆုံးမှာ
                download links options ပေးထားပါတယ်
              </p>
              <p>
                download links options တခုခုကိုနှိပ်လိုက်မယ်ဆိုရင် mega link
                ကိုသွားပါလိမ့်မယ် အဲ့ဒီမှာ စပီး download ဆွဲလို့ရပါပြီခင်ဗျာ.
              </p>
            </InfoPageStyles>
          </SectionLayout>
        </section>
        <Sidebar />
      </section>
    </ContentLayout>
  );
}

export default PageHowToDownload;
