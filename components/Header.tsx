import {
  ComponentSearchInput,
  IconClose,
  IconMenu,
  IconSearch,
  IconTheme
} from '@components';
import { DARK, keywords, LIGHT, PATH_GENRES } from '@constants';
import { useToggle } from '@hooks';
import { HeaderLayout, SearchInputLayout } from '@styles';
import Image from 'next/image';
import Link from 'next/link';
import Router from 'next/router';
import { useTheme } from 'next-themes';
import { useEffect, useRef } from 'react';

export const Header = () => {
  const { theme, setTheme } = useTheme();
  const [show, setShow] = useToggle();
  const [menu, toggle] = useToggle();

  const refUL = useRef<HTMLUListElement>(null);

  useEffect(() => {
    document.addEventListener('mousedown', handleClick);
    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  });

  const handleClick = (e: MouseEvent) => {
    if (refUL.current && !refUL.current.contains(e.target as Node)) {
      toggle.setToggle(false);
    }
  };

  Router.events.on('routeChangeComplete', () => toggle.setToggle(false));
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
              <button className="mobile-menu-icon" onClick={toggle.toggle}>
                {menu ? (
                  <IconClose color={theme === LIGHT ? '#000' : '#fff'} />
                ) : (
                  <IconMenu color={theme === LIGHT ? '#000' : '#fff'} />
                )}
              </button>
              <ul className={menu ? 'vs-ms show' : 'vs-ms'} ref={refUL}>
                <li>
                  <Link href={'/'}>Home</Link>
                </li>
                <li>
                  <Link href={`${PATH_GENRES}${keywords.TV_SHOWS}`}>
                    TV Shows
                  </Link>
                </li>
                <li>
                  <Link href={'/how_to_download'}>How to download</Link>
                </li>
                <li>
                  <Link href={'/dmca_policy'}>DMCA</Link>
                </li>
                <li>
                  <Link href={'/about'}>About</Link>
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
                  <Link href={`${PATH_GENRES}${keywords.TV_SHOWS}`}>
                    TV Shows
                  </Link>
                </li>
                <li>
                  <Link href={'/how_to_download'}>How to download</Link>
                </li>
                <li>
                  <Link href={'/dmca_policy'}>DMCA</Link>
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
        {show && <ComponentSearchInput />}
      </SearchInputLayout>
    </>
  );
};
