import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from './pages/login.jsx';
import Signup from './pages/signup.jsx';
import HomeReview from './pages/homeReview.jsx';
import CreateReview from './pages/createReview.jsx';
import EditReview from './pages/editReview.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "Login",
    element: <Login/>
  },
  {
    path: "Signup",
    element: <Signup/>
  },
  {
    path: "kost",
    element: <HomeReview/>
  },
  {
    path: "create",
    element: <CreateReview/>
  },
  {
    path: "edit/:id",
    element: <EditReview/>
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
