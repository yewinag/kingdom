import { MainContent } from '@styles';
import dynamic from 'next/dynamic';
import Header from '../Header';

// const Header = dynamic(() => import('../Header'), {
//   loading: () => <p>Loading...</p>
// });
const Footer = dynamic(() => import('../Footer'), {
  loading: () => <p>loading...</p>
});
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
