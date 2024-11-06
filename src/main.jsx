import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'



import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root.jsx';
import Home from './components/Home/Home.jsx';
import AppliedJobs from './components/AppliedJobs/AppliedJobs.jsx';
import Blogs from './components/Blogs/Blogs.jsx';
import Statistics from './components/Statistics/Statistics.jsx';
import JobDetails from './components/JobDetails/JobDetails.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"/appliedJobs",
        element: <AppliedJobs></AppliedJobs>
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>
      },
      {
        path: "/job/:id",
        element:<JobDetails></JobDetails>,
        loader:()=>fetch("../public/jobs.json"),
      }
    ]
  },
]);










createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
