import { ComponentSearch, IconSearch, IconTheme } from '@components';
import { DARK, LIGHT } from '@constants';
import { HeaderLayout } from '@styles';
import Image from 'next/image';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { useToggle } from '@hooks';

export const Header = () => {
  const { theme, setTheme } = useTheme();
  const [show, setShow] = useToggle(false);
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
              <ul>
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
              <button className="theme-btn" onClick={changeTheme}>
                {theme === LIGHT ? (
                  <IconTheme color={'#000'} />
                ) : (
                  <IconTheme color={'#fff'} />
                )}
                {/* <IconTheme color={theme === DARK ? '#fff' : '#000'} /> */}
              </button>
              <button className="search-btn" onClick={setShow}>
                <IconSearch color="white" />
              </button>
            </article>
          </header>
        </div>
      </HeaderLayout>
      <div className="container">{show && <ComponentSearch />}</div>
    </>
  );
};
