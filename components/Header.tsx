import { useTheme } from 'next-themes';
import Image from 'next/image';
import Link from 'next/link';
import { IconSearch, IconTheme } from './icons';
import { enumTheme } from 'interface';
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
              <a href="/">
                <Image src={'/soulkingdom.png'} width={75} height={40} />
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
