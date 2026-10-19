import { lazy } from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";

import { PublicLayout } from "@/features/store/layout/PublicLayout";

const AuthLayout = lazy(() => import('@/features/auth/layout/AuthLayout'));
const AdminLayout = lazy(() => import('@/features/admin/layout/AdminLayout'));

import { HomePage } from "@/features/store/articles/pages/HomePage";

import { ArticleViewPage } from "@/features/store/article/pages/ArticleViewPage";

import { LoginPage } from "@/features/auth/pages/LoginPage";
import { RegisterPage } from "@/features/auth/pages/RegisterPage";


export const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <PublicLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'products/:idSlug',
        element: <ArticleViewPage />,
      },
    ]
  },

  {
    path: '/auth',
    element: <AuthLayout />,
    children: [
      {
        index: true,
        element: <Navigate to='/auth/login' />
      },
      {
        path: 'login',
        element: <LoginPage />
      },
      {
        path: 'register',
        element: <RegisterPage />
      },
    ]
  },

  {
    path: '/admin',
    element: <AdminLayout />,
  },

  {
    path: '*',
    element: <Navigate to='/' />
  }
]);