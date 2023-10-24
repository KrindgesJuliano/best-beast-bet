// eslint-disable-next-line no-unused-vars
import axios from 'axios';
// eslint-disable-next-line no-unused-vars
import React, { useContext, useEffect, useState } from 'react';
import UserContext from '../../context/user';

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
      <h1>Perfil</h1>
      <div>
        <p>{user?.nome}</p>
        <p>{user?.email}</p>
      </div>
    </div>
  );
};
