import React from 'react';

import loadable from '@loadable/component';
import { Outlet, RouteObject } from 'react-router-dom';
import LoadingIndicator from '~/components/LoadingIndicator';

const ContractorsList = loadable(() => import('~/containers/Contractors/ContractorsList'));
const NotFound = loadable(() => import('~/containers/NotFound'));

const contractorsRouter: RouteObject = {
  path: 'contractors',
  caseSensitive: true,
  element: <Outlet />,
  children: [
    {
      path: 'list',
      caseSensitive: true,
      element: (
        <React.Suspense fallback={<LoadingIndicator />}>
          <ContractorsList />
        </React.Suspense>
      ),
    },
    {
      path: '*',
      element: <NotFound />,
    },
  ],
};

export default contractorsRouter;
