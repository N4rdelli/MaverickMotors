import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'

import App from './App.jsx'

import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import Home from "./Routes/Home/Home.jsx";
import ErrorPage from './Routes/ErrorPage/ErrorPage.jsx';

import Yards from "./Routes/Yards/Yards.jsx";
import Vehicles from './Routes/Vehicles/Vehicles.jsx';
import Costumers from './Routes/Costumers/Costumers.jsx';
import Rentals from './Routes/Rentals/Rentals.jsx';
import Dashboard from './Routes/Dashboard/Dashboard.jsx';

import YardDetails from './Routes/Yards/YardDetails.jsx';
import VehicleDetails from './Routes/Vehicles/VehicleDetails.jsx'
import CostumerDetails from './Routes/Costumers/CostumerDetails.jsx'
import RentalDetails from './Routes/Rentals/RentalDetails.jsx'

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
      },
      {
        path: "/vehicles",
        element: <Vehicles />
      },
      {
        path: "/vehicles/:id",
        element: <VehicleDetails />
      },
      {
        path: "/costumers",
        element: <Costumers />
      },
      {
        path: "/costumers/:id",
        element: <CostumerDetails />
      },
      {
        path: "/rentals",
        element: <Rentals />
      },
      {
        path: "/rentals/:id",
        element: <RentalDetails />
      },
      {
        path: "/dashboard",
        element: <Dashboard />
      },
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={routes} />
  </StrictMode>,
)
