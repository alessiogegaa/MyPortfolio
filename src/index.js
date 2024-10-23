import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import EventCalendar from './Components/EventCalendar/EventCalendar';
import ProjectDetails from './Components/ProjectDetails/ProjectDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,   
  },
  {
    path: "/events",
    element: <EventCalendar/>
  },
  {
    path: "/project/:id",
    element: <ProjectDetails/>
  }
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);
