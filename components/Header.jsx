// Header.js

import Link from 'next/link';
import '@stylesheets/Header.scss';

const Header = () => {
  return (
    <nav className="navbar">
        <div className='logo'>
            <img src="/logo.png"  alt="logo" />
        </div>
        <ul className="navList">
          <li className="navItem">
            <Link href="/">
              <span>Home</span>
            </Link>
          </li>
          <li className="navItem">
            <Link href="/about">
              <span>About</span>
            </Link>
          </li>
          <li className="navItem">
            <Link href="/contact">
              <span>Contact</span>
            </Link>
          </li>
        </ul>
        <Link href="/register" className="register">Register</Link>
    </nav>
  );
};

export default Header;