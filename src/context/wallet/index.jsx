import axios from 'axios';
import { createContext, useCallback, useState } from 'react';
import PropTypes from 'prop-types';

const WalletContext = createContext({});

// eslint-disable-next-line react/prop-types
const WalletContextProvider = ({ children }) => {
  const [wallet, setWallet] = useState();
  const [walletStatement, setWalletStatement] = useState();

  const handleGetWalletValues = useCallback(async (id) => {
    await axios
      .get(`http://localhost:3001/api/v1/carteiras/${id}/saldo`)
      .then((res) => {
        // console.log(res.data);
        setWallet(res.data);
      })
      .catch((err) => {
        alert(err.response.data.mensagem);
        console.log(err.response.data.mensagem);
      });
  }, []);

  const handleGetWalletStatement = useCallback(async (id) => {
    await axios
      .get(`http://localhost:3001/api/v1/carteiras/${id}/extrato`)
      .then((res) => {
        // console.log(res.data);
        setWalletStatement(res.data);
      })
      .catch((err) => {
        alert(err.response.data.mensagem);
        console.log(err.response.data.mensagem);
      });
  }, []);

  return (
    <WalletContext.Provider
      value={{
        wallet,
        walletStatement,
        handleGetWalletValues,
        handleGetWalletStatement,
      }}
    >
      {children}
    </WalletContext.Provider>
  );
};

WalletContextProvider.propType = {
  children: PropTypes.element.isRequired,
};

export { WalletContextProvider };
export default WalletContext;
