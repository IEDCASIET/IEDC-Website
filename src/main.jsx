import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import './index.css';
import EventsPage from './pages/Events/Events';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Gallery from './pages/Gallery/Gallery';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/events",
    element: <EventsPage />,
  },
  {
    path: "/gallery",
    element: <Gallery />,
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
