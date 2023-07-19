import {
  ComponentSearchInput,
  IconClose,
  IconMenu,
  IconSearch,
  IconTheme
} from '@components';
import {
  ABOUT,
  DARK,
  DISCLAIMER,
  HOW_TO_DOWNLOAD,
  keywords,
  LIGHT,
  PATH_GENRES
} from '@constants';
import { useToggle } from '@hooks';
import { HeaderLayout, SearchInputLayout } from '@styles';
import { DEFAULT_PAGE } from '@utils';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTheme } from 'next-themes';
import { useEffect, useRef } from 'react';

const Header = () => {
  const { theme, setTheme } = useTheme();
  const [show, setShow] = useToggle();
  const [menu, toggle] = useToggle();

  const refUL = useRef<HTMLDivElement>(null);
  const router = useRouter();
  useEffect(() => {
    document.addEventListener('mousedown', handleClick);
    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  });

  const handleClick = (e: MouseEvent) => {
    if (refUL.current && !refUL.current.contains(e.target as Node)) {
      setShow.setToggle(false);
    }
  };
  const changeTheme = () => {
    if (theme === LIGHT) {
      setTheme(DARK);
    } else {
      setTheme(LIGHT);
    }
  };
  const goToRoute = (url: string) => {
    router.push(`${PATH_GENRES}/${url}/${DEFAULT_PAGE}`);
    toggle.setToggle(false);
  };
  return (
    <>
      <HeaderLayout>
        <div className="container">
          <header className="header-layout">
            <div className="mobile-menu vs-ms">
              <button
                className="mobile-menu-icon"
                aria-pressed={false}
                onClick={toggle.toggle}
                title="mobile-menu button"
                // ref={refUL}
              >
                {menu ? (
                  <IconClose color={theme === LIGHT ? '#000' : '#fff'} />
                ) : (
                  <IconMenu color={theme === LIGHT ? '#000' : '#fff'} />
                )}
              </button>
              <ul role={'menu'} className={menu ? 'vs-ms show' : 'vs-ms'}>
                <li
                  onClick={() => goToRoute('/')}
                  onKeyDown={() => goToRoute('/')}
                  role={'menuitem'}
                >
                  Home
                </li>
                <li
                  onClick={() => goToRoute(`${keywords.TV_SHOWS}`)}
                  onKeyDown={() => goToRoute(`${keywords.TV_SHOWS}`)}
                  role={'menuitem'}
                >
                  TV Shows
                </li>
                <li
                  onClick={() => goToRoute(`${keywords.LATEST}`)}
                  onKeyDown={() => goToRoute(`${keywords.LATEST}`)}
                  role={'menuitem'}
                >
                  Latest
                </li>
                <li
                  onClick={() => goToRoute(`${keywords.ANIME}`)}
                  onKeyDown={() => goToRoute(`${keywords.ANIME}`)}
                  role={'menuitem'}
                >
                  Animes
                </li>
                <li
                  onClick={() => goToRoute(`${keywords.MOVIES}`)}
                  onKeyDown={() => goToRoute(`${keywords.MOVIES}`)}
                  role={'menuitem'}
                >
                  Movies
                </li>
                <li
                  onClick={() => goToRoute(HOW_TO_DOWNLOAD)}
                  onKeyDown={() => goToRoute(HOW_TO_DOWNLOAD)}
                  role={'menuitem'}
                >
                  How to download
                </li>
                <li
                  onClick={() => goToRoute(DISCLAIMER)}
                  onKeyDown={() => goToRoute(DISCLAIMER)}
                  role={'menuitem'}
                >
                  Disclaimer
                </li>
                <li
                  onClick={() => goToRoute(ABOUT)}
                  onKeyDown={() => goToRoute(ABOUT)}
                  role={'menuitem'}
                >
                  About
                </li>
              </ul>
            </div>
            <div className="header-menu flex-layout">
              <div className="logo-layout">
                <Link href="/">
                  <a>
                    <Image
                      src={'/soulkingdom.png'}
                      width={164}
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
                  <Link href={'/how_to_download'}>How to download</Link>
                </li>
                <li>
                  <Link href={'/disclaimer'}>Disclaimer</Link>
                </li>
                <li>
                  <Link href={'/about'}>About</Link>
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
                onClick={setShow.toggle}
                aria-label={'search button'}
              >
                <IconSearch color="white" />
              </button>
            </article>
          </header>
        </div>
      </HeaderLayout>
      <SearchInputLayout className="container">
        {show && (
          <div ref={refUL}>
            <ComponentSearchInput />
          </div>
        )}
      </SearchInputLayout>
    </>
  );
};
export default Header;
