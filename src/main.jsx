import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Router from './Router/Router';
import Home from './Pages/Home/Home';
import Statistics from './Pages/Statistics/Statistics';
import AppliedJobs from './Pages/AppliedJobs/AppliedJobs';
import Blog from './Pages/Blog/Blog';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Router></Router>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/statistics',
        element: <Statistics></Statistics>,
      },
      {
        path: '/applied-jobs',
        element: <AppliedJobs></AppliedJobs>,
      },
      {
        path: '/blog',
        element: <Blog></Blog>,
      },
      
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />

  </StrictMode>,
)
