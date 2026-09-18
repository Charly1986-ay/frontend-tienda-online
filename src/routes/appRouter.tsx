import { createBrowserRouter, Navigate } from "react-router-dom";

import { HomePage } from "../features/public/articles/pages/HomePage";
import { ArticleViewPage } from "../features/public/articles/pages/ArticleViewPage";
import { PublicLayout } from "../shared/layouts/PublicLayout";

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
        path: 'articles/:idSlug',
        element: <ArticleViewPage />,
      },
      {
        path: '*',
        //element: <h1>404</h1>,
        element: <Navigate to='/' />
      },
    ]
  },
]);