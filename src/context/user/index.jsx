import { createContext, useCallback, useState, useMemo } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

const UserContext = createContext({
  isAuthenticate: false,
  token: '',
  id: '',
});

// eslint-disable-next-line react/prop-types
const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [token, setToken] = useState();

  const Clear = useCallback(() => {
    localStorage.clear();
  }, []);

  const saveUserId = useCallback((idUser) => {
    localStorage.setItem('idUser', JSON.stringify(user));
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
        })
        .catch((err) => console.log(err));
    },
    [saveToken, saveUserId]
  );

  const isAuthenticated = useMemo(() => Boolean(token && user), [token, user]);

  return (
    <UserContext.Provider value={(Clear, handleLoginUser, isAuthenticated)}>
      {children}
    </UserContext.Provider>
  );
};

UserContextProvider.propType = {
  children: PropTypes.element.isRequired,
};

export { UserContextProvider };
export default UserContext;
