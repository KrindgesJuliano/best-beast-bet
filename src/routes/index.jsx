import { createBrowserRouter } from 'react-router-dom';
import { Home } from '../modules/Home';
// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react';
import { Auth } from '../modules/Auth';
import { Layout } from '../layout';
import ErrorPage from './error-page';
import { Logout } from '../modules/Auth/logout';
import { User } from '../modules/User';
import { Login } from '../modules/Auth/login';
import { Profile } from '../modules/User/profile';
import { Dashboard } from '../modules/Dashboard';
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
        Component: Home,
      },
      // {
      //   path: 'login',
      //   Component: Login
      // }
    ],
  },
  {
    id: 'public',
    path: '/login',
    Component: Auth,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        Component: Login,
      },
      {
        path: 'new-user',
        Component: User,
      },
    ],
  },
  {
    id: 'private',
    path: '/dashboard',
    Component: Layout,
    children: [
      {
        index: true,
        Component: Dashboard,
      },
      {
        path: 'profile',
        Component: Profile,
      },
    ],
  },
  {
    path: '/logout',
    Component: Logout,
  },
]);

export default router;
