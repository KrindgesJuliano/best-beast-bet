// eslint-disable-next-line no-unused-vars
import React from 'react';

import Grupos from '../../assets/grups.json';

export const Dashboard = () => {
  return (
    <div>
      <header className="flex justify-between items-center h-[60px]">
        <h1>Dashboard</h1>
        <div className="flex gap-2 items-baseline bg-white rounded-4 p-4">
          <p className="font-500">Carteira</p>{' '}
          <span className="text-green text-xl font-700">350</span>
        </div>
      </header>
      <div className="grid grid-cols-4">
        {Grupos.grupos.map((grupo) => (
          <div key={grupo.numero}>
            {grupo.numero}
            {grupo.animal}
            {grupo.numero}
          </div>
        ))}
      </div>
    </div>
  );
};
