import { createBrowserRouter, redirect } from "react-router-dom";
import { Home } from "../modules/Home";
// eslint-disable-next-line no-unused-vars
import React from "react";
import { Login } from "../modules/Auth";
import { Layout } from "../layout";
// import { Header } from "../layout/Header";


const router = createBrowserRouter([
  {
    id: 'root',
    Component: Layout,
    path: '/',
    children: [
      {
        index: true,
        Component: Home
      },
      {
        path: 'login',
        Component: Login
      }
    ]
  },
  {
    id: 'private',
    path: 'home'
  },
  {
    path: '/logout',
    async action() {
      return redirect("/")
    }
  }
])

export default router