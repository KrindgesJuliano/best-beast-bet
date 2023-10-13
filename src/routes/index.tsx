import { createBrowserRouter, redirect } from "react-router-dom";
import { Home } from "../modules/Home";
// eslint-disable-next-line no-unused-vars
import React from "react";
// import { Header } from "../layout/Header";


const router = createBrowserRouter([
  {
    id: 'root',
    Component: Home,
    path: '/',
  },
  {
    path: '/logout',
    async action() {
      return redirect("/")
    }
  }
])

export default router