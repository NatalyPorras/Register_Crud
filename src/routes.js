import React, { lazy } from 'react'
import { Redirect } from 'react-router-dom'
import LayoutRegister from './layout'
import {routesPath} from './constants'


const routes = [
  {
  route: '*',
    component: LayoutRegister,
    routes: [

        {
          path: routesPath.LIST_REGISTER,
          exact: true,
          component: lazy(() => import('./Views/ListRegister'))
        },
        {
          path: routesPath.CREATE_REGISTER,
          exact: true,
          component: lazy(() => import('./Views/CreateRegister'))
        },
        {
          path: routesPath.UPDATE_REGISTER,
          exact: true,
          component: lazy(() => import('./Views/EditRegister'))
      },
      {
            path: '/',
          exact: true,
          component: () => <Redirect to="/register" />
        },
      ]
  }
]

export default routes
