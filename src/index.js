import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import Home from './components/Home/Home';
import Topic from './components/Topic/Topic';
import Statistics from './components/Statistics/Statistics';
import QuizeDetails from './components/QuizeDetails/QuizeDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('https://openapi.programming-hero.com/api/quiz')
      },
      {
        path: 'quize/:quizeId',
        element: <QuizeDetails></QuizeDetails>,
        loader: ({params}) => fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizeId}`)
      },
      {
        path: '/statistics',
        element: <Statistics></Statistics>
       
      },
     
     
    ]
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
