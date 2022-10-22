import {
  ComponentSearchInput,
  IconClose,
  IconMenu,
  IconSearch,
  IconTheme
} from '@components';
import { DARK, LIGHT } from '@constants';
import { useToggle } from '@hooks';
import { HeaderLayout } from '@styles';
import Image from 'next/image';
import Link from 'next/link';
import { useTheme } from 'next-themes';

export const Header = () => {
  const { theme, setTheme } = useTheme();
  const [show, setShow] = useToggle(false);
  const [showMenu, setShowMenu] = useToggle(false);
  const changeTheme = () => {
    if (theme === LIGHT) {
      setTheme(DARK);
    } else {
      setTheme(LIGHT);
    }
  };

  return (
    <>
      <HeaderLayout>
        <div className="container">
          <header className="header-layout">
            <div className="mobile-menu vs-ms">
              <button className="mobile-menu-icon" onClick={setShowMenu}>
                {showMenu ? (
                  <IconClose color={theme === LIGHT ? '#000' : '#fff'} />
                ) : (
                  <IconMenu color={theme === LIGHT ? '#000' : '#fff'} />
                )}
              </button>
              <ul className={showMenu ? 'vs-ms show' : 'vs-ms'}>
                <li>
                  <Link href={'/'}>Home</Link>
                </li>
                <li>
                  <Link href={'/'}>Series</Link>
                </li>
                <li>
                  <Link href={'/'}>VIP</Link>
                </li>
                <li>
                  <Link href={'/'}>How to download</Link>
                </li>
              </ul>
            </div>
            <div className="header-menu flex-layout">
              <div className="logo-layout">
                <Link href="/">
                  <a>
                    <Image
                      src={'/soulkingdom.png'}
                      width={75}
                      height={40}
                      alt={'soulkingdom logo'}
                    />
                  </a>
                </Link>
              </div>
              <ul className="vs-md">
                <li>
                  <Link href={'/'}>Home</Link>
                </li>
                <li>
                  <Link href={'/'}>Series</Link>
                </li>
                <li>
                  <Link href={'/'}>VIP</Link>
                </li>
                <li>
                  <Link href={'/'}>How to download</Link>
                </li>
              </ul>
            </div>
            <article className="search">
              <button
                className="theme-btn"
                onClick={changeTheme}
                aria-label={'search button'}
              >
                {theme === LIGHT ? (
                  <IconTheme color={'#000'} />
                ) : (
                  <IconTheme color={'#fff'} />
                )}
              </button>
              <button
                className="search-btn"
                onClick={setShow}
                aria-label={'search button'}
              >
                <IconSearch color="white" />
              </button>
            </article>
          </header>
        </div>
      </HeaderLayout>
      <div className="container">{show && <ComponentSearchInput />}</div>
    </>
  );
};
