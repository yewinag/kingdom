import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
// import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <>
      <header className="header">
        <div className="container">
          <header className="header-layout">
            <div className="header-menu flex-layout">
              <div className="logo-layout">
                <Link href={'/'}>
                  <Image src={'/logo.jpeg'} width={220} height={32} />
                </Link>
              </div>
              <ul>
                <li>
                  <a>Home</a>
                </li>
                <li>
                  <a>Series</a>
                </li>
                <li>
                  <a>VIP</a>
                </li>
                <li>
                  <a>How to download</a>
                </li>
              </ul>
            </div>
            <article className="header-search">
              <input />
            </article>
          </header>
        </div>
      </header>
      <section className="main-content container">
        <div className="main-header">
          <h4 className="content-title">Content Recently Added</h4>
        </div>
        <section className="content-list">
          <h4 className="content-title">Content Recently Added</h4>
          <section className="content-body">
            <article className="item-card">
              <Link href="/">
                <div className="image">
                  <img src="https://channelmyanmar.org/wp-content/uploads/2022/06/djX35_4f-153x200.jpg" />
                  <span className="player"></span>
                  <span className="rating">7.8</span>
                </div>
              </Link>
              <div className="info">
                <p>2 Good 2 Be True(2022)</p>
                <span>2022</span>
              </div>
            </article>
            <article className="item-card">
              <Link href="/">
                <div className="image">
                  <img src="https://channelmyanmar.org/wp-content/uploads/2022/06/djX35_4f-153x200.jpg" />
                  <span className="player"></span>
                  <span className="rating">7.8</span>
                </div>
              </Link>
              <div className="info">
                <p>2 Good 2 Be True(2022)</p>
                <span>2022</span>
              </div>
            </article>
            <article className="item-card">
              <Link href="/">
                <div className="image">
                  <img src="https://channelmyanmar.org/wp-content/uploads/2022/06/djX35_4f-153x200.jpg" />
                  <span className="player"></span>
                  <span className="rating">7.8</span>
                </div>
              </Link>
              <div className="info">
                <p>2 Good 2 Be True(2022)</p>
                <span>2022</span>
              </div>
            </article>
            <article className="item-card">
              <Link href="/">
                <div className="image">
                  <img src="https://channelmyanmar.org/wp-content/uploads/2022/06/djX35_4f-153x200.jpg" />
                  <span className="player"></span>
                  <span className="rating">7.8</span>
                </div>
              </Link>
              <div className="info">
                <p>2 Good 2 Be True(2022)</p>
                <span>2022</span>
              </div>
            </article>
            <article className="item-card">
              <Link href="/">
                <div className="image">
                  <img src="https://channelmyanmar.org/wp-content/uploads/2022/06/djX35_4f-153x200.jpg" />
                  <span className="player"></span>
                  <span className="rating">7.8</span>
                </div>
              </Link>
              <div className="info">
                <p>2 Good 2 Be True(2022)</p>
                <span>2022</span>
              </div>
            </article>
            <article className="item-card">
              <Link href="/">
                <div className="image">
                  <img src="https://channelmyanmar.org/wp-content/uploads/2022/06/djX35_4f-153x200.jpg" />
                  <span className="player"></span>
                  <span className="rating">7.8</span>
                </div>
              </Link>
              <div className="info">
                <p>2 Good 2 Be True(2022)</p>
                <span>2022</span>
              </div>
            </article>
            <article className="item-card">
              <Link href="/">
                <div className="image">
                  <img src="https://channelmyanmar.org/wp-content/uploads/2022/06/djX35_4f-153x200.jpg" />
                  <span className="player"></span>
                  <span className="rating">7.8</span>
                </div>
              </Link>
              <div className="info">
                <p>2 Good 2 Be True(2022)</p>
                <span>2022</span>
              </div>
            </article>
            <article className="item-card">
              <Link href="/">
                <div className="image">
                  <img src="https://channelmyanmar.org/wp-content/uploads/2022/06/djX35_4f-153x200.jpg" />
                  <span className="player"></span>
                  <span className="rating">7.8</span>
                </div>
              </Link>
              <div className="info">
                <p>2 Good 2 Be True(2022)</p>
                <span>2022</span>
              </div>
            </article>
            <article className="item-card">
              <Link href="/">
                <div className="image">
                  <img src="https://channelmyanmar.org/wp-content/uploads/2022/06/djX35_4f-153x200.jpg" />
                  <span className="player"></span>
                  <span className="rating">7.8</span>
                </div>
              </Link>
              <div className="info">
                <p>2 Good 2 Be True(2022)</p>
                <span>2022</span>
              </div>
            </article>
          </section>
          <aside className="sidebar">
            <h3>Spronsor</h3>
            <img src="https://channelmyanmar.org/wp-content/uploads/2020/07/mmbus_ads_4.png" />
          </aside>
        </section>
        <article className="content-pagination">pagination</article>
      </section>
      <footer className="footer container">
        <p>
          ©2017 All rights reserved Disclaimer: ChannelMyanmar.org is not in
          anyway associated with Gostream.is, Onlinemovies, Fmovies, Xmovies8,
          Putlocker sites. We do not host any videos on Channelmyanmar.org
          itself. Channelmyanmar.org is absolutely legal and contains only links
          to other third party websites like Youtube, Uptobox, Mediafire,
          Google, Picasaweb, Dailymotion, Openload, VK.com and many more which
          actually host videos. Channelmyanmar.org is not responsible for the
          compliance, copyright, legality, decency, or any other aspect of the
          content of other linked sites. If you have any legal issues please
          contact the appropriate media file owners or linked hosting websites.
          Channelmyanmar.org only and only provides links to third party video
          hosting sites which videos are uploaded by third party users.
          Channelmyanmar.org in no way affiliated with them nor intend to do
          that.
        </p>
      </footer>
    </>
  );
};

export default Home;
