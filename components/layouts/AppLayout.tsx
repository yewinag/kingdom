import { Footer } from '../Footer';
import { Header } from '../Header';
interface Iprops {
  children: any;
}
export const AppLayout = (props: Iprops) => {
  return (
    <div>
      <Header />
      <section className="main-content container">{props.children}</section>
      <Footer />
    </div>
  );
};
