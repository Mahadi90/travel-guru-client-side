import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Main from './layout/Main.jsx';
import Home from './components/Home.jsx';
import Booking from './components/Booking.jsx';
import Login from './components/Login.jsx';
import Register from './components/Register.jsx';
import "react-datepicker/dist/react-datepicker.css";
import AuthProvider from './providers/AuthProvider';
import Details from './components/Details';
import PrivateRoutes from './routes/PrivateRoutes';



const router = createBrowserRouter([
  {
    path: '/',
    element: <Main/>,
    children: [
      {
        path: '/',
        element: <Home/>,
        loader : () => fetch('http://localhost:5000/places')
      },
      {
        path: '/booking/:id',
        element: <Booking/>,
        loader: ({params}) => fetch(`http://localhost:5000/places/${params.id}`)
      },
      {
        path: '/login',
        element: <Login/>
      },
      {
        path: '/register',
        element: <Register/>
      },
      {
        path:'details',
        element:<PrivateRoutes><Details/></PrivateRoutes>,
        loader: () => fetch('http://localhost:5000/details')
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider><RouterProvider router={router}/></AuthProvider>
  </React.StrictMode>,
)
