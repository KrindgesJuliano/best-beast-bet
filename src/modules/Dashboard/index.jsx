// eslint-disable-next-line no-unused-vars
import React, { useContext, useEffect } from 'react';

import Grupos from '../../assets/groups.json';

import WalletContext from '../../context/wallet';

export const Dashboard = () => {
  const { wallet } = useContext(WalletContext);

  return (
    <div>
      <header className="flex justify-between items-center h-[60px]">
        <h1>Dashboard</h1>
        <div className="flex gap-2 items-baseline bg-white rounded-4 p-4">
          <p className="font-500">Carteira</p>{' '}
          <span className="text-green text-xl font-700">{wallet?.saldo}</span>
        </div>
      </header>
      <div className="grid grid-cols-4 gap-4 mt-4">
        {Grupos.grupos.map((grupo) => (
          <div
            key={grupo.numero}
            className="bg-[#c4c4c4] w-[100%] h-[10rem] rounded cursor-pointer"
          >
            <div className="text-white flex flex-col justify-between h-full">
              <span className="font-700 text-4xl p2 text-black">
                {grupo.grupo}
              </span>
              <div className="bg-[#2E1B86] w-[100%] p2 flex justify-between">
                <span className="text-xl">{grupo.animal}</span>
                <span className="text-xl">{grupo.numero}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
