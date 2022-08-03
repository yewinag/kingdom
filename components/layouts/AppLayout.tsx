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
      <section className="main-content container">{props.children}</section>
      <Footer />
    </div>
  );
};

export default AppLayout;
