import { Sidebar } from '@components';
import {
  ContentLayout,
  SeactionHeading,
  SectionLayout,
  StyledHeading
} from '@styles';
function PageHowToDownload() {
  return (
    <ContentLayout>
      <StyledHeading>{`HOW TO DOWNLOAD`}</StyledHeading>
      <section className="listing-layout">
        <section className="content-body">
          <SectionLayout>
            <SeactionHeading>
              Channel Myanmar မှ Video Download နည်းများ (နမူနာဒေါင်းပြထားတဲ့
              Video တွေကိုအောက်ဆုံးမှာသွားကြည့်လို့ပါတယ်။)
              ==========================
            </SeactionHeading>
            <p>
              www.channelmyanmar.org
              ကိုသွားပါ။ကိုယ်ဒေါင်းချင်တဲ့ဇာတ်ကားကိုရွေးပါ။(ဒီမှာတစ်ခုသတိပေးချင်တာက
              ဖုန်းတို့ဘာတို့ဆို Ads Block ခံထားရင် Download
              လို့မရပါဘူး…ဒါကြောင့် မိမိဖုန်း Browser ရဲ့ setting ထဲဝင်ပြီး Ads
              Block ကိုပိတ်ထားလိုက်ပါ။)အညွှန်းနဲ့ Movie Info တွေရဲ့အောက်မှာ
              Download Server ဆိုတာတွေတွေ့ရပါမယ်။နှစ်သက်ရာ ကိုရွေးပြီး
              နှိပ်လိုက်ပါ။
            </p>
            <p>
              (အင်တာနက်မယ် Download လုပ်မယ်ဆို မှတ်ထားဖို့တစ်ခုက
              မဆိုင်တာတွေတက်လာတာနဲ့(ကြော်ငြာ)ဖုန်းနဲ့ဆို
              ချက်ချင်းနောက်ပြန်ဆုတ်ပါ။ PC နဲ့ဆို တက်လာတာကိုပိတ်ပစ်ပါ။
              ဒါမဖြစ်မနေလုပ်ရမယ့်အလုပ်ပါ။)Movie တင်ထားတဲ့ Server
              မျိုးစုံရှိပါတယ်။
            </p>
            <p>
              Yoteshin , Userdrive , Megaup , Yandex , Upstream , Meganz
              စသည်ဖြင့်မျိုးစုံတွေ့ရပါမယ်။(Yoteshin နဲ့ ဒေါင်းလို့ Gdrive မှာ
              save လို့မရတော့ဘူးပြရင် gdrive မှာ free space
              ကုန်သွားလို့ပါ..အဲ့ဒါဆို ကိုယ့် Gdrive ထဲကိုယ်ဝင်ပြီး မလိုတာတွေ
              ဖျက်လိုက်ပါ…Trash ထဲလဲထပ်ဝင်ပြီးဖျက်လိုက်ပါ..ဒါဆို နောက်ထပ်ပြီး
              save and download လို့ရပါပြီ။)Website ထဲကို VPN နဲ့မှ
              ဝင်လို့ရသူတွေကတော့ Download ဆွဲခါနီးကျ VPN ပိတ်ပြီးဆွဲပါ ။ဘယ် Link
              နှိပ်နှိပ် အရင်တွေ့ပြီး ကျော်ရမှာကတော့ CM PAGE ပါ ။ ၁ –
              ခဏစောင့်ပြီး ၂ – Link ရယူရန်ကို နှိပ်ပါ အောက်မှာ ပုံဖြင့်
              ပြထားပါတယ်
            </p>
          </SectionLayout>
        </section>
        <Sidebar />
      </section>
    </ContentLayout>
  );
}

export default PageHowToDownload;
