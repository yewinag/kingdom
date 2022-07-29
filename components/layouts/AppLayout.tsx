// import Footer from '@/components/Footer';

import { Footer } from '../Footer';
import { Header } from '../Header';

// import Header from '@/components/Header';
interface Iprops {
  children: any;
}
const AppLayout = (props: Iprops) => {
  return (
    <div>
      <Header />
      <div>{props.children}</div>
      <Footer />
    </div>
  );
};

export default AppLayout;
