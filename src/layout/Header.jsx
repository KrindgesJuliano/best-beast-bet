// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header className="bg-[#2E1B86] h-[60px]">
      <div className="container ma flex items-center h-full justify-between">
        <a href="/" className="font-700 decoration-none text-[#FFA84C]">
          Home
        </a>
        <nav>
          <Link
            to={'/login'}
            className="h-[32px] px-3 rounded font-700 bg-[#FFA84C] text-white"
          >
            Login
          </Link>
        </nav>
      </div>
    </header>
  );
};
