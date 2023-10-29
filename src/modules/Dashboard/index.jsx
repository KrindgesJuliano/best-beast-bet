import axios from 'axios';
// eslint-disable-next-line no-unused-vars
import React, { useCallback, useContext, useEffect, useState } from 'react';
import Modal from 'react-modal';

import Grupos from '../../assets/groups.json';

import WalletContext from '../../context/wallet';
import UserContext from '../../context/user';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    width: '30rem',
    height: '20rem',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

export const Dashboard = () => {
  const [openModal, setOpenModal] = useState(false);
  const [betNumber, setBetNumber] = useState(0);
  const [betPoints, setBetPoints] = useState();

  const { userId } = useContext(UserContext);

  const { wallet, handleGetWalletValues } = useContext(WalletContext);

  const handleBet = useCallback(
    async (betNumber, bettingPoints) => {
      // console.log(betNumber, bettingPoints);

      await axios
        .post('http://localhost:3030/api/v1/bets', {
          userId,
          betNumber,
          bettingPoints: Number(bettingPoints),
        })
        .then((res) => {
          console.log(res.data);
        });
    },
    [userId]
  );

  const handleOpenModal = useCallback((number) => {
    setOpenModal(true);
    setBetNumber(number);
    console.log(number);
  }, []);

  function closeModal() {
    setOpenModal(false);
  }

  useEffect(() => {
    const fetchData = async () => {
      handleGetWalletValues(userId);
    };

    fetchData();
  }, [handleGetWalletValues, userId]);

  return (
    <div>
      <header className="flex justify-between items-center h-[60px]">
        <h1>Dashboard</h1>
        <div className="flex gap-2 items-baseline bg-white rounded-4 p-4">
          <p className="font-500">Carteira:</p>{' '}
          <span className="text-green text-xl font-700">{wallet?.saldo}</span>
        </div>
      </header>
      <Modal
        isOpen={openModal}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <h2>Confirmar Aposta</h2>
        <div className="flex flex-col gap-2">
          <span>Grupo: {betNumber}</span>
          <label htmlFor="points" className="flex flex-col w-[20%]">
            Pontos:{' '}
            <input
              type="text"
              id="points"
              value={betPoints}
              onChange={(event) => setBetPoints(event.target.value)}
              className="outline-amber bg-[#E8E8E8] px-2 py-2 rounded"
            />
          </label>
        </div>
        <footer className="fixed bottom-[10%]  flex gap-4">
          <button
            onClick={() => handleBet(betNumber, betPoints)}
            className="cursor-pointer py-3 px-5 rounded font-700 bg-[#FFA84C] text-white"
          >
            Confirmar
          </button>
          <button
            onClick={() => setOpenModal(false)}
            className="cursor-pointer py-3 px-5 rounded font-700 bg-red text-white"
          >
            Cancelar
          </button>
        </footer>
      </Modal>
      <div className="grid grid-cols-4 gap-4 my-4">
        {Grupos.grupos.map((grupo) => (
          <div
            onClick={() => handleOpenModal(grupo.grupo)}
            key={grupo.numero}
            className="bg-[#E0E0E0] w-[100%] h-[10rem] rounded cursor-pointer"
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
