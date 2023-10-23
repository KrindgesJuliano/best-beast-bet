// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import UserContext from '../context/user';

export const Header = () => {
  const { isUserAuthenticated } = useContext(UserContext);
  console.log(isUserAuthenticated);
  return (
    <header className="bg-[#2E1B86] h-[60px]">
      <div className="container ma flex items-center h-full justify-between">
        <Link href="/" className="font-700 decoration-none text-[#FFA84C]">
          Best Beast Bet
        </Link>
        <nav>
          {isUserAuthenticated === true ? (
            <Link to={'/logout'} className="text-white">
              Logout
            </Link>
          ) : (
            <Link
              to={'/login'}
              className="py-3 px-5 rounded font-700 bg-[#FFA84C] text-white"
            >
              Login
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
};
