// eslint-disable-next-line no-unused-vars
import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import UserContext from '../../context/user';

export const Logout = () => {
  const navigate = useNavigate();

  const { handleLogout } = useContext(UserContext);

  useEffect(() => {
    handleLogout();
    navigate('/');
  });

  // console.log(token, user);
  return <div>Deslongando</div>;
};
