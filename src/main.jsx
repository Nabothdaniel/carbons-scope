import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import './index.css'


//pages

import LandingPage from './pages/LandingPage';
import DashboardPage from './pages/dashboard-pages/DashboardPage';
import DashboardIndex from './pages/dashboard-pages';
import EmissionData from './pages/dashboard-pages/EmissionData';
import ReportsPage from './pages/dashboard-pages/ReportsPage';
import Teams from './pages/dashboard-pages/Teams';
import Settings from './pages/dashboard-pages/Settings';

const router = createBrowserRouter([
  {
    path:'/',
    element:<LandingPage/>
  },
  {
    path:'/dashboard',
    element:<DashboardIndex/>,
    children:[
      {
        index:true,
        element:<DashboardPage/>
      },
      {
        path:'emission',
        element:<EmissionData/>
      },
      {
        path:'reports',
        element:<ReportsPage/>
      },
      {
        path:'teams',
        element:<Teams/>
      },
      {
        path:'settings',
        element:<Settings/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
