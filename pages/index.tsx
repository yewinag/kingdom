import type { NextPage } from 'next';
import { ComponentRandom } from '../components';
import Listing from '../components/Listing';
const Home: NextPage = () => {
  return (
    <>
      <ComponentRandom />
      <Listing />
    </>
  );
};

export default Home;
