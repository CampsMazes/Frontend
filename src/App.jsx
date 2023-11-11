import './css/App.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './Layout';
import Home from './pages/Home'
import College from '../src/components/Colleges'
import CollegeInfo from './components/collegeData/CollegeInfo';
import CounsellorInfo from './components/Counsellor/CounsellorInfo';
import CounsellorDetail from './components/CounsellorData/CounsellorDetail';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path:"/college",
        element: <College />,
      },
      {
        path:"/collegeinfo",
        element: <CollegeInfo />,
      },
      {
        path:"/counsellorinfo",
        element: <CounsellorInfo />,
      },
      {
        path:"/counsellordetail",
        element: <CounsellorDetail />,
      },
    ],
  },
]);

function App() {

  return (
    <>
     <RouterProvider router={router} />
    </>
  )
}

export default App
