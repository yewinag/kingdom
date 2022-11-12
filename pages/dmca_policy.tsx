import { Sidebar } from '@components';
import { ISeoInfo } from '@interface';
import { ContentLayout, SectionLayout, StyledHeading } from '@styles';
import MetaTags from 'components/MetaTags';

function PageDMCA() {
  const metaData: ISeoInfo = {
    title: `ဒေတာ ပေါ်လစီ ကြေညာခြင်း`,
    description: `လက်ရှိ ရှပ်ရှင် ဇတ်ကားများသည် အင်တာနက်ပေါ်တွင် အလကားရရှိသော ရှပ်ရှင်ဇတ်ကားများကိုသာ ပြန်လည်မျှ၀ေပေးခြင်းဖစ်ပါကြောင်း အသိပေးအပ်ပါသည်`
  };
  return (
    <ContentLayout>
      <MetaTags metaData={metaData} />
      <StyledHeading>{`DMCA Policy`}</StyledHeading>
      <section className="listing-layout">
        <section className="content-body">
          <SectionLayout>
            <p>
              ChannelMyanmar in compliance with 17 U.S.C. § 512 and the Digital
              Millennium Copyright Act (“DMCA”). It is our policy to respond to
              any infringement notices and take appropriate actions under the
              Digital Millennium Copyright Act (“DMCA”) and other applicable
              intellectual property laws.
            </p>
            <p>
              If your copyrighted material has been posted on ChannelMyanmar or
              if links to your copyrighted material are returned through our
              search engine and you want this material removed, you must provide
              a written communication that details the information listed in the
              following section. Please be aware that you will be liable for
              damages (including costs and attorneys’ fees) if you misrepresent
              information listed on our site that is infringing on your
              copyrights. We suggest that you first contact an attorney for
              legal assistance on this matter.
            </p>
            <p>
              The following elements must be included in your copyright
              infringement claim: Provide evidence of the authorized person to
              act on behalf of the owner of an exclusive right that is allegedly
              infringed. Provide sufficient contact information so that we may
              contact you. You must also include a valid email address. You must
              identify in sufficient detail the copyrighted work claimed to have
              been infringed and including at least one search term under which
              the material appears in soulkingdom.net search results. A
              statement that the complaining party has a good faith belief that
              use of the material in the manner complained of is not authorized
              by the copyright owner, its agent, or the law. A statement that
              the information in the notification is accurate, and under penalty
              of perjury, that the complaining party is authorized to act on
              behalf of the owner of an exclusive right that is allegedly
              infringed. Must be signed by the authorized person to act on
              behalf of the owner of an exclusive right that is allegedly being
              infringed.
            </p>
            <p>
              Please allow 1-3 business days for an email response. Note that
              emailing your complaint to other parties such as our Internet
              Service Provider will not expedite your request and may result in
              a delayed response due the complaint not properly being filed.
            </p>
          </SectionLayout>
        </section>
        <Sidebar />
      </section>
    </ContentLayout>
  );
}
export default PageDMCA;
