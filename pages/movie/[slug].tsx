import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { Footer } from '../../modules';
import { Header } from '../../modules/Header';
import Listing from '../../modules/Listing';
// import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Listing />
      <Footer />
    </>
  );
};

export default Home;
