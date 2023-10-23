// eslint-disable-next-line no-unused-vars
import React, { useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';

import Logo from '../../assets/lion.png';
import UserContext from '../../context/user';
// import Cover from '../../assets/cover.jpg';

export const Login = () => {
  const navigate = useNavigate();
  const { isUserAuthenticated, handleLoginUser, user } =
    useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    await handleLoginUser(data.login, data.senha);
  };

  console.log(isUserAuthenticated, user);
  useEffect(() => {
    if (isUserAuthenticated === true) {
      navigate('/');
    }
  }, [isUserAuthenticated, navigate]);

  return (
    <div className="bg-[#2E1B86] h-screen">
      <header className="container ma h-[5rem] flex items-center">
        {/* <h1 className="text-amber">Login</h1> */}
        <Link to="/">
          <img src={Logo} alt="" className="object-contain" width={50} />
        </Link>
      </header>
      <section className="container m-a h-3xl bg-white rounded">
        <div className="flex p8 gap-lg h-[90%]">
          {/* <div className="max-w-[50%]">
            <img src={Cover} alt="" />
          </div> */}
          <div className="w-full h-full flex  items-center flex-col">
            <div className="flex flex-col justify-center items-center p4 w-full">
              <img
                src={Logo}
                alt="imagem ilustrada de um leão"
                width={170}
                height={170}
              />
              <div className="text-center">
                <h2>Bem Vindo</h2>
                <p>Por favor, preencha os campos abaixo</p>
              </div>
            </div>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col justify-center"
            >
              <div className="flex flex-col w-md">
                <label htmlFor="">Usuário</label>
                <input
                  id="username"
                  type="text"
                  {...register('login', { required: true })}
                  className="h-[42px] rounded bg-light text-xl px-2 focus:outline-amber"
                />
                {errors.login && <span>This field is required</span>}
              </div>
              <div className="flex flex-col w-md">
                <label htmlFor="password">Senha</label>
                <input
                  id="password"
                  {...register('senha', { required: true })}
                  type="text"
                  className="h-[42px] rounded bg-light text-xl px-2 focus:outline-amber"
                />
                {errors.senha && <span>This field is required</span>}
              </div>
              <input
                type="submit"
                value="Entrar"
                className="bg-amber px-7 font-700 rounded h-[42px] mt-4 cursor-pointer"
              />
            </form>
            <p className="font-700 mt-4">ou</p>
            <button className="bg-amber px-7 font-700 rounded h-[42px] mt-4 cursor-pointer">
              Criar Conta
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
