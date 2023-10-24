// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link, Outlet } from 'react-router-dom';

import Logo from '../../assets/lion.png';

export const Auth = () => {
  return (
    <div className="bg-[#2E1B86] h-screen">
      <header className="container ma h-[5rem] flex items-center">
        {/* <h1 className="text-amber">Login</h1> */}
        <Link to="/">
          <img src={Logo} alt="" className="object-contain" width={50} />
        </Link>
      </header>
      <section className="container m-a h-3xl bg-white rounded">
        <Outlet />
      </section>
    </div>
  );
};
