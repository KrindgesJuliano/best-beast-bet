// eslint-disable-next-line no-unused-vars
import axios from 'axios';
// eslint-disable-next-line no-unused-vars
import React, { useContext, useEffect, useState } from 'react';
import UserContext from '../../context/user';
import Logo from '../../assets/lion.png';

export const Profile = () => {
  const { handleGetUser, user } = useContext(UserContext);
  const [loading, setLoading] = useState(true);

  // console.log(user, token);

  useEffect(() => {
    const fetchData = async () => {
      handleGetUser();
    };
    fetchData().catch((err) => console.log(err));
    setLoading(false);
  }, [handleGetUser]);
  if (loading) {
    return <p>carregando</p>;
  }

  return (
    <div>
      <header className="flex justify-between items-center h-[60px]">
        <h1>Perfil</h1>
      </header>
      <div className="flex gap-4 items-center flex-col">
        <div className="w-[100%] flex flex-col items-center h-[15rem]">
          <div className="border rounded-[100%] border-solid border-blueGray p1 object-cover">
            <img src={Logo} width="100" />
          </div>
          <div className="flex flex-col gap-2 items-center">
            <div>
              {/* <p className="font-700 text-xl">Nome</p> */}
              <p>{user?.nome}</p>
            </div>
            <div>
              {/* <p className="font-700 text-xl">Email</p> */}
              <p>{user?.email}</p>
            </div>
          </div>
        </div>
        <div className="bg-white w-full p-4 rounded">
          <div className="flex justify-around border-b border-solid border-[#c4c4c4] p-4">
            <div className="flex flex-col items-center">
              <h3 className="text-coolGray">Total Carteira</h3>
              <span className="text-4xl text-center">350</span>
            </div>
            <div className="flex flex-col items-center">
              <h3 className="text-coolGray">Total Premio</h3>
              <span className="text-4xl text-center">150</span>
            </div>
          </div>
          <div>
            <h3 className="text-center mb-4 p-4">Histórico</h3>
            <table className="w-full">
              <thead className="text-left text-[#c4c4c4] font-400 border-b border-coolGray border-solid">
                <th>DATA</th>
                <th>QUANTIDADE</th>
                <th>STATUS</th>
                <th>PREMIO</th>
              </thead>
              <tbody className="">
                <tr className="h-[3rem] border-b border-solid border-[#c4c4c4]">
                  <td>30/06/2023</td>
                  <td>200</td>
                  <td>TERMINADO</td>
                  <td>0</td>
                </tr>
                <tr className="h-[3rem]">
                  <td>30/06/2023</td>
                  <td>200</td>
                  <td>TERMINADO</td>
                  <td>0</td>
                </tr>
                <tr className="h-[3rem]">
                  <td>30/06/2023</td>
                  <td>200</td>
                  <td>TERMINADO</td>
                  <td>0</td>
                </tr>
                <tr className="h-[3rem]">
                  <td>30/06/2023</td>
                  <td>200</td>
                  <td>TERMINADO</td>
                  <td>0</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
