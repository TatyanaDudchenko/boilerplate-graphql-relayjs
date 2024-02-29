import React from 'react';
import loadable from '@loadable/component';
import { Outlet, RouteObject } from 'react-router-dom';

import LoadingIndicator from '~/components/LoadingIndicator';

const ContractorsList = loadable(() => import('~/containers/Contractors/ContractorsList/index'));
const Contractor = loadable(() => import('~/containers/Contractors/Contractor/index'));
const NotFound = loadable(() => import('~/containers/NotFound/index'));

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
      path: ':id',
      caseSensitive: true,
      element: (
        <React.Suspense fallback={<LoadingIndicator />}>
          <Contractor />
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
