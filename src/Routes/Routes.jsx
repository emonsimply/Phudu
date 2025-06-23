import React, { Component } from 'react';
import {
  createBrowserRouter,
} from "react-router";
import Root from '../pages/Root/Root';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Home from '../pages/Home/Home';
import MyBookings from '../pages/MyBookings/MyBookings';
import Blogs from '../pages/Blogs/Blogs';



export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,

    children: [
      {
        index: true,
        loader:()=>fetch('doctors.json'),
        path:"/",
        Component:Home
      },
      {
        path:"/myBookings",
        Component:MyBookings
      },
      {
        path:"/blogs",
        Component:Blogs
      }
    ]
  },
]);