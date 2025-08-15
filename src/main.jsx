import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import MainLayout from './Layout/MainLayout.jsx';
import Navbar from './Component/Navbar.jsx';
import AddExpense from './Pages/AddExpense.jsx';
import TotalExpense from './Pages/TotalExpense.jsx';
import HomePage from './Pages/HomePage.jsx';
import EditExpense from './Pages/EditExpense.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        index: true,
        element: <HomePage></HomePage>,
      },
      {
        path: "/add-expense",
        element: <AddExpense></AddExpense>,
      },
      {
        path: '/total-expense',
        element: <TotalExpense></TotalExpense>,
      },
      {
         path: "/edit-expense/:id",
        element: <EditExpense></EditExpense>
      },
    ]
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router} />,

  </StrictMode>,
)
