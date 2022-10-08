import { enumTheme } from 'interface';
import Image from 'next/image';
import Link from 'next/link';
import { useTheme } from 'next-themes';

import { IconSearch, IconTheme } from './icons';
export const Header = () => {
  const { theme, setTheme } = useTheme();
  const changeTheme = () => {
    if (theme === enumTheme.LIGHT) {
      setTheme(enumTheme.DARK);
    } else {
      setTheme(enumTheme.LIGHT);
    }
  };
  return (
    <header className="header">
      <div className="container">
        <header className="header-layout">
          <div className="header-menu flex-layout">
            <div className="logo-layout">
              {/* <Link href="/"> */}
              <Link href="/">
                <Image
                  src={'/soulkingdom.png'}
                  width={75}
                  height={40}
                  alt={'soulkingdom logo'}
                />
              </Link>
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
            <button className="theme-btn" onClick={changeTheme}>
              <IconTheme
                color={theme === enumTheme.LIGHT ? 'black' : 'white'}
              />
            </button>
            <button className="search-btn">
              <IconSearch color="white" />
            </button>
          </article>
        </header>
      </div>
    </header>
  );
};
