import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import About from './About';
import Contact from './Contact';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Product from './Product';
import Menfashion from './Menfashion';
import Openitem from './Openitem';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/about",
    element: <About/>,
  },
  {
    path: "/products",
    element: <Product/>,
  },
  {
    path: "/openitem",
    element: <Openitem/>,
  },
  {
    path: "/menfashion",
    element: <Menfashion/>,
  },
  {
    path: "/contact",
    element: <Contact/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
