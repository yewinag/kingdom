import { MainContent } from '@styles';

import { Footer } from '../Footer';
import { Header } from '../Header';
interface Iprops {
  children: React.ReactNode | JSX.Element;
}
export const AppLayout = (props: Iprops) => {
  return (
    <>
      <Header />
      <MainContent className="container">{props.children}</MainContent>
      <Footer />
    </>
  );
};
