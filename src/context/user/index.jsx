import { createContext, useCallback, useState, useMemo } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

const t = JSON.parse(localStorage.getItem('token'));
const u = JSON.parse(localStorage.getItem('idUser'));

const UserContext = createContext({
  // isAuthenticate: Boolean(t && u),
  // token: t,
  // user: u,
});

// eslint-disable-next-line react/prop-types
const UserContextProvider = ({ children }) => {
  // console.log(t, u);
  const [userId, setUserId] = useState(u);
  const [token, setToken] = useState(t);
  const [user, setUser] = useState();
  // const [isUserAuthenticated, setIsUserAuthenticated] = useState(false);

  const clear = useCallback(() => {
    localStorage.removeItem('token');
    localStorage.removeItem('idUser');
    localStorage.clear();
  }, []);

  const saveUserId = useCallback((idUser) => {
    localStorage.setItem('idUser', JSON.stringify(idUser));
    setUserId(idUser);
  }, []);

  const saveToken = useCallback((token) => {
    localStorage.setItem('token', JSON.stringify(token));
    setToken(token);
  }, []);

  const handleGetUser = useCallback(async () => {
    await axios
      .get(`http://localhost:3000/api/v1/usuarios/${userId}`, {
        headers: {
          Authorization: 'Bearer ' + token,
          'user-id': userId,
        },
      })
      .then((res) => {
        setUser(res.data);
      });
  }, [token, userId]);

  const handleLoginUser = useCallback(
    async (login, senha) => {
      await axios
        .post('http://localhost:3000/api/seg/login', { login, senha })
        .then((res) => {
          saveToken(res.data.token);
          saveUserId(res.data.id);
          // isAuthenticate();
        })
        .catch((err) => {
          alert(err.response.data.mensagem);
          console.log(err.response.data.mensagem);
        });
    },
    [saveToken, saveUserId]
  );

  const handleLogout = useCallback(() => {
    console.log('deslongando...');
    setToken('');
    setUserId('');
    clear();
    // isAuthenticate();
  }, [clear]);

  const isUserAuthenticated = useMemo(
    () => Boolean(token && userId),
    [token, userId]
  );

  return (
    <UserContext.Provider
      value={{
        clear,
        handleLoginUser,
        isUserAuthenticated,
        userId,
        token,
        user,
        handleLogout,
        handleGetUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

UserContextProvider.propType = {
  children: PropTypes.element.isRequired,
};

export { UserContextProvider };
export default UserContext;
