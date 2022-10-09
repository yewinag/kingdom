import { Footer } from '../Footer';
import { Header } from '../Header';
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
