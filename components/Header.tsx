import { IconSearch, IconTheme } from '@components';
import { dark, light } from '@constants';
import { HeaderLayout } from '@styles';
import Image from 'next/image';
import Link from 'next/link';
import { useTheme } from 'next-themes';
export const Header = () => {
  const { theme, setTheme } = useTheme();

  const changeTheme = () => {
    if (theme === light) {
      setTheme(dark);
    } else {
      setTheme(light);
    }
  };

  return (
    <HeaderLayout>
      <div className="container">
        <header className="header-layout">
          <div className="header-menu flex-layout">
            <div className="logo-layout">
              <Link href="/">
                <Image
                  src={'/soulkingdom.png'}
                  width={75}
                  height={40}
                  alt={'soulkingdom logo'}
                />
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
              <IconTheme color={theme === dark ? 'white' : 'black'} />
            </button>
            <button className="search-btn">
              <IconSearch color="white" />
            </button>
          </article>
        </header>
      </div>
    </HeaderLayout>
  );
};
