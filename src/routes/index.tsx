import { Navigate, useRoutes } from 'react-router-dom';

import { sitePaths } from '@/configurations/paths';
// layouts
import MainLayout from '@/layouts/main/layout';

import { errorsRoutes } from './errors';
// config
import { HomePage, mainRoutes } from './main';

// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    {
      path: sitePaths.home,
      element: (
        <MainLayout>
          <HomePage />
        </MainLayout>
      ),
    },
    ...mainRoutes,
    ...errorsRoutes,
    { path: '*', element: <Navigate to={sitePaths.page404} replace /> },
  ]);
}
