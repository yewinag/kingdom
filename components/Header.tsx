import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { ComponentSearch } from './Search';
export const Header = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  return (
    <header className="header">
      <div className="container">
        <header className="header-layout">
          <div className="header-menu flex-layout">
            <div className="logo-layout">
              {/* <Link href="/"> */}
              <a href="/">
                <Image src={'/logo.png'} width={220} height={32} />
              </a>
              {/* </Link> */}
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
          <article className="search">
            <button onClick={() => setToggle(!toggle)}>Search</button>
          </article>
        </header>
        {toggle && <ComponentSearch />}
      </div>
    </header>
  );
};
