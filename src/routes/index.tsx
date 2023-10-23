import { createBrowserRouter } from "react-router-dom";
import { Home } from "../modules/Home";
// eslint-disable-next-line no-unused-vars
import React, { useContext } from "react";
import { Login } from "../modules/Auth";
import { Layout } from "../layout";
import ErrorPage from "./error-page";
import { Logout } from "../modules/Auth/logout";
// import { Header } from "../layout/Header";

const router = createBrowserRouter([
  {
    id: 'root',
    Component: Layout,
    path: '/',
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        Component: Home
      },
      // {
      //   path: 'login',
      //   Component: Login
      // }
    ]
  },
  {
    id: 'public',
    path: '/login',
    Component: Login,
    errorElement: <ErrorPage />
  },
  {
    path: '/logout',
    Component: Logout
  }
])

export default router