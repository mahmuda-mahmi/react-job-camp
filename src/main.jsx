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
import ViewDetails from './components/ViewDetails/ViewDetails';

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
        loader: () => fetch('jobs.json'),
      },
      {
        path: '/applied-jobs',
        element: <AppliedJobs></AppliedJobs>,
        loader: () => fetch('jobs.json'),
      },
      {
        path: '/blog',
        element: <Blog></Blog>,
        loader: () => fetch('blogs.json'),
      },
      {
        path: '/job/:id',
        element: <ViewDetails></ViewDetails>,
        loader: () => fetch('jobs.json'),
      },
      
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />

  </StrictMode>,
)
