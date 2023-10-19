// eslint-disable-next-line no-unused-vars
import React from 'react';

export const Login = () => {
  return (
    <div className="bg-[#2E1B86] h-screen">
      <header className="container ma h-[5rem] flex items-center">
        <h1 className="text-amber">Login</h1>
      </header>
      <section className="container m-a h-2xl bg-white rounded">
        <div className="flex p8">
          <div className="w-[45%]">img</div>
          <div className="w-[45%]">
            <form action="" method="post">
              <div className="flex flex-col w-md">
                <label htmlFor="">Usuário</label>
                <input
                  id="username"
                  type="text"
                  className="h-[42px] rounded bg-light"
                />
              </div>
              <div className="flex flex-col w-md">
                <label htmlFor="">Senha</label>
                <input
                  id="password"
                  type="text"
                  className="h-[42px] rounded bg-light"
                />
              </div>
              <input
                type="submit"
                value="Entrar"
                className="bg-amber px-5 rounded h-[42px]"
              />
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};
