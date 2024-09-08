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
    path: "/react-job-camp",
    element: <Router></Router>,
    children: [
      {
        path: '/react-job-camp',
        element: <Home></Home>,
      },
      {
        path: '/react-job-camp/statistics',
        element: <Statistics></Statistics>,
        loader: () => fetch('jobs.json'),
      },
      {
        path: '/react-job-camp/applied-jobs',
        element: <AppliedJobs></AppliedJobs>,
        loader: () => fetch('jobs.json'),
      },
      {
        path: '/react-job-camp/blog',
        element: <Blog></Blog>,
        loader: () => fetch('blogs.json'),
      },
      {
        path: '/react-job-camp/job/:id',
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
