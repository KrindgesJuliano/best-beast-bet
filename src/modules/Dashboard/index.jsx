import axios from 'axios';
// eslint-disable-next-line no-unused-vars
import React, { useCallback, useContext, useEffect, useState } from 'react';
import Modal from 'react-modal';

import WalletContext from '../../context/wallet';
import UserContext from '../../context/user';

import Avestruz from '../../assets/animais/avestruz.png';
import Aguia from '../../assets/animais/aguia.png';
import Burro from '../../assets/animais/burro.png';
import Borboleta from '../../assets/animais/borboleta.png';
import Cachorro from '../../assets/animais/cachorro.png';
import Cabra from '../../assets/animais/cabra.png';
import Carneiro from '../../assets/animais/ovelha.png';
import Camelo from '../../assets/animais/camelo.png';
import Cobra from '../../assets/animais/cobra.png';
import Coelho from '../../assets/animais/coelho.png';
import Cavalo from '../../assets/animais/cavalo.png';
import Elefante from '../../assets/animais/elefante.png';
import Galo from '../../assets/animais/galo.png';
import Gato from '../../assets/animais/gato.png';
import Jacare from '../../assets/animais/jacare.png';
import Leao from '../../assets/animais/leao.png';
import Macaco from '../../assets/animais/macaco.png';
import Porco from '../../assets/animais/porco.png';
import Pavao from '../../assets/animais/pavao.png';
import Peru from '../../assets/animais/peru.png';
import Vaca from '../../assets/animais/vaca.png';
import Touro from '../../assets/animais/touro.png';
import Tigre from '../../assets/animais/tigre.png';
import Urso from '../../assets/animais/urso.png';
import Veado from '../../assets/animais/veado.png';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    width: '20rem',
    height: '15rem',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    zIndex: '99999',
  },
};

const grupos = [
  {
    grupo: 1,
    animal: 'Avestruz',
    numero: '01-02-03-04',
    imagem: Avestruz,
  },
  {
    grupo: 2,
    animal: 'Águia',
    numero: '05-06-07-08',
    imagem: Aguia,
  },
  {
    grupo: 3,
    animal: 'Burro',
    numero: '09-10-11-12',
    imagem: Burro,
  },
  {
    grupo: 4,
    animal: 'Borboleta',
    numero: '13-14-15-16',
    imagem: Borboleta,
  },
  {
    grupo: 5,
    animal: 'Cachorro',
    numero: '17-18-19-20',
    imagem: Cachorro,
  },
  {
    grupo: 6,
    animal: 'Cabra',
    numero: '21-22-23-24',
    imagem: Cabra,
  },
  {
    grupo: 7,
    animal: 'Carneiro',
    numero: '25-26-27-28',
    imagem: Carneiro,
  },
  {
    grupo: 8,
    animal: 'Camelo',
    numero: '29-30-31-32',
    imagem: Camelo,
  },
  {
    grupo: 9,
    animal: 'Cobra',
    numero: '33-34-35-36',
    imagem: Cobra,
  },
  {
    grupo: 10,
    animal: 'Coelho',
    numero: '37-38-39-40',
    imagem: Coelho,
  },
  {
    grupo: 11,
    animal: 'Cavalo',
    numero: '41-42-43-44',
    imagem: Cavalo,
  },
  {
    grupo: 12,
    animal: 'Elefante',
    numero: '45-46-47-48',
    imagem: Elefante,
  },
  {
    grupo: 13,
    animal: 'Galo',
    numero: '49-50-51-52',
    imagem: Galo,
  },
  {
    grupo: 14,
    animal: 'Gato',
    numero: '53-54-55-56',
    imagem: Gato,
  },
  {
    grupo: 15,
    animal: 'Jacaré',
    numero: '57-58-59-60',
    imagem: Jacare,
  },
  {
    grupo: 16,
    animal: 'Leão',
    numero: '61-62-63-64',
    imagem: Leao,
  },
  {
    grupo: 17,
    animal: 'Macaco',
    numero: '65-66-67-68',
    imagem: Macaco,
  },
  {
    grupo: 18,
    animal: 'Porco',
    numero: '69-70-71-72',
    imagem: Porco,
  },
  {
    grupo: 19,
    animal: 'Pavão',
    numero: '73-74-75-76',
    imagem: Pavao,
  },
  {
    grupo: 20,
    animal: 'Peru',
    numero: '77-78-79-80',
    imagem: Peru,
  },
  {
    grupo: 21,
    animal: 'Touro',
    numero: '81-82-83-84',
    imagem: Touro,
  },
  {
    grupo: 22,
    animal: 'Tigre',
    numero: '85-86-87-88',
    imagem: Tigre,
  },
  {
    grupo: 23,
    animal: 'Urso',
    numero: '89-90-91-92',
    imagem: Urso,
  },
  {
    grupo: 24,
    animal: 'Veado',
    numero: '93-94-95-96',
    imagem: Veado,
  },
  {
    grupo: 25,
    animal: 'Vaca',
    numero: '97-98-99-00',
    imagem: Vaca,
  },
];

Modal.setAppElement('#root');

export const Dashboard = () => {
  const [openModal, setOpenModal] = useState(false);
  const [betNumber, setBetNumber] = useState(0);
  const [betPoints, setBetPoints] = useState();
  const [betResult, setBetResult] = useState();
  const betId = localStorage.getItem('betId');

  const { userId } = useContext(UserContext);

  const { wallet, handleGetWalletValues } = useContext(WalletContext);

  const handleBet = useCallback(
    async (betNumber, bettingPoints) => {
      // console.log(betNumber, bettingPoints);

      await axios
        .post('https://bestbeastbet.vps.webdock.cloud/api/v1/bets', {
          userId,
          betNumber,
          bettingPoints: Number(bettingPoints),
        })
        .then((res) => {
          if (res.status === 200) {
            handleGetWalletValues(userId);
            setOpenModal(false);
            alert('aposta realizada com sucesso');
            console.log('betId: ' + res.data[0]?.id);
            localStorage.setItem('betId', res.data[0]?.id);
          }
        })
        .catch((err) => {
          alert('erro ao realizar aposta' + err.response?.data);
        });
    },
    [handleGetWalletValues, userId]
  );

  const handleOpenModal = useCallback((number) => {
    setOpenModal(true);
    setBetNumber(number);
    // console.log(number);
  }, []);

  function closeModal() {
    setOpenModal(false);
  }

  useEffect(() => {
    const fetchData = async () => {
      handleGetWalletValues(userId);
      await axios
        .get(`https://bestbeastbet.vps.webdock.cloud/api/v1/bets/${betId}/user/${userId}`)
        .then((res) => {
          console.log(res.data[0]);
          setBetResult(res.data[0]);
        })
        .catch((err) => {
          alert(err.response?.data);
        });
    };

    fetchData();
  }, [betId, handleGetWalletValues, userId]);

  return (
    <div>
      <header className="flex justify-between items-center h-[60px]">
        <h1>Dashboard</h1>
        <div className="flex gap2">
          <div className="flex flex-col gap-2 items-baseline bg-white rounded-4 px-4">
            <p>Resultado do ultimo sorteio</p>
            <div className="flex justify-between">
              <span> Numero: {betResult?.number} </span>
              <span>&nbsp; - &nbsp; Premio: {betResult?.prizeAmount} </span>
            </div>
          </div>
          <div className="flex flex-col items-baseline bg-white rounded-4  px-4">
            <p className="font-500">Carteira</p>
            <span className="text-green text-3xl font-700 text-center w-full ">
              {wallet?.saldo}
            </span>
          </div>
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
        {grupos.map((grupo) => (
          <div
            onClick={() => handleOpenModal(grupo.grupo)}
            key={grupo.numero}
            className="bg-[#E0E0E0] w-[100%] h-[10rem] rounded cursor-pointer"
          >
            <div className="text-white flex flex-col justify-between h-full relative">
              <img
                src={grupo.imagem}
                alt=""
                className="object-contain absolute z-0 w-full h-full p10"
              />
              <span className="font-700 text-4xl p2 text-black">
                {grupo.grupo}
              </span>
              <div className="bg-[#2E1B86] w-[100%] p2 flex justify-between z-0">
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
