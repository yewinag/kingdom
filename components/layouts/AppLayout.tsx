import { MainContent } from '@styles';
import { Footer } from '../Footer';
import { Header } from '../Header';
interface Iprops {
  children: any;
}
export const AppLayout = (props: Iprops) => {
  return (
    <div>
      <Header />
      <MainContent className="container">{props.children}</MainContent>
      <Footer />
    </div>
  );
};
