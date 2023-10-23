import { createContext, useCallback, useState, useMemo } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

const t = localStorage.getItem('token');
const u = localStorage.getItem('idUser');

const UserContext = createContext({
  // isAuthenticate: Boolean(t && u),
  // token: t,
  // user: u,
});

// eslint-disable-next-line react/prop-types
const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(u);
  const [token, setToken] = useState(t);
  // const [isUserAuthenticated, setIsUserAuthenticated] = useState(false);

  const clear = useCallback(() => {
    localStorage.removeItem('token');
    localStorage.removeItem('idUser');
    localStorage.clear();
  }, []);

  const saveUserId = useCallback((idUser) => {
    localStorage.setItem('idUser', JSON.stringify(idUser));
    setUser(idUser);
  }, []);

  const saveToken = useCallback((token) => {
    localStorage.setItem('token', JSON.stringify(token));
    setToken(token);
  }, []);

  const handleLoginUser = useCallback(
    async (login, senha) => {
      await axios
        .post('http://localhost:3000/api/seg/login', { login, senha })
        .then((res) => {
          saveToken(res.data.token);
          saveUserId(res.data.id);
          // isAuthenticate();
        })
        .catch((err) => console.log(err));
    },
    [saveToken, saveUserId]
  );

  const handleLogout = useCallback(() => {
    console.log('deslongando...');
    setToken('');
    setUser('');
    clear();
    // isAuthenticate();
  }, [clear]);

  const isUserAuthenticated = useMemo(
    () => Boolean(token && user),
    [token, user]
  );

  return (
    <UserContext.Provider
      value={{
        clear,
        handleLoginUser,
        isUserAuthenticated,
        user,
        token,
        handleLogout,
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
