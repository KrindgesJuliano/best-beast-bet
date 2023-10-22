import { createBrowserRouter, redirect } from "react-router-dom";
import { Home } from "../modules/Home";
// eslint-disable-next-line no-unused-vars
import React from "react";
import { Login } from "../modules/Auth";
import { Layout } from "../layout";
import ErrorPage from "./error-page";
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
    async action() {
      return redirect("/")
    }
  }
])

export default router