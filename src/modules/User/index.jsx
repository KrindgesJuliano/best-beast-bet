// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from 'axios';

export const User = () => {
  const [message, setMessage] = useState();
  const {
    register,
    handleSubmit,
    formState: { errors, isLoading },
  } = useForm();
  const onSubmit = async (data) => {
    await axios
      .post('https://bestbeastbet.vps.webdock.cloud/api/v1/usuarios', data)
      .then((res) => {
        console.log(res);
        setMessage(res.status);
      })
      .catch((err) => {
        console.log(err.response.data.mensagem);
        setMessage(err.status);
        alert(err.response.data.mensagem);
      });
  };

  return (
    <div className="flex h-full items-center flex-col p4">
      <div className="h-full flex flex-col justify-center items-center p4 w-full">
        <h1>Nova Conta</h1>
        {message === 200 ? (
          <>
            <p className="text-4xl font-700 text-[#2E1B86]">
              Cadastrado com Sucesso!
            </p>
            <Link
              to={'/login'}
              className="flex items-center bg-amber px-7 font-700 rounded h-[42px] mt-4 cursor-pointer text-lg text-black"
            >
              Entrar
            </Link>
          </>
        ) : (
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col justify-center gap-2"
          >
            <div className="flex flex-col w-md">
              <label htmlFor="name">Nome</label>
              <input
                id="name"
                type="text"
                {...register('nome', { required: true })}
                className="h-[42px] rounded bg-light text-xl px-2 focus:outline-amber"
              />
              {errors.nome && <span>This field is required</span>}
            </div>
            <div className="flex flex-col w-md">
              <label htmlFor="email">E-Mail</label>
              <input
                id="email"
                type="text"
                {...register('email', { required: true })}
                className="h-[42px] rounded bg-light text-xl px-2 focus:outline-amber"
              />
              {errors.email && <span>This field is required</span>}
            </div>
            <div className="flex flex-col w-md">
              <label htmlFor="username">Usuário</label>
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
                type="password"
                className="h-[42px] rounded bg-light text-xl px-2 focus:outline-amber"
              />
              {errors.senha && <span>This field is required</span>}
            </div>
            <input
              type="submit"
              value="Cadastrar"
              disabled={isLoading}
              className="bg-amber px-7 font-700 rounded h-[42px] mt-4 cursor-pointer text-lg"
            />
          </form>
        )}
      </div>
    </div>
  );
};
