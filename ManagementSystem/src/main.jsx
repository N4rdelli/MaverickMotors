import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import Home from "./Routes/Home/Home.jsx";
import Yards from "./Routes/Yards/Yards.jsx";
import ErrorPage from './Routes/ErrorPage/ErrorPage.jsx'
import YardDetails from './Routes/YardDetails/YardDetails.jsx'

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children:[
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/yards",
        element: <Yards />
      },
      {
        path: "/yards/:id",
        element: <YardDetails />
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={routes} />
  </StrictMode>,
)
