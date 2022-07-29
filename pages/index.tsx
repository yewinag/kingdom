import type { NextPage } from 'next';
import { ComponentRandom } from '../components';
import Listing from '../components/Listing';
const Home: NextPage = () => {
  return (
    <section className="main-content container">
      <ComponentRandom />
      <Listing />
    </section>
  );
};

export default Home;
