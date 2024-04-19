import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./Home";
import GenreMovie from "./GenreMovie";
import FavoriteMovie from "./FavoriteMovie";
import DetailMovie from "./DetailMovie";
import PopularMovie from "./PopularMovie";
import NowPlaying from "./NowPlaying";
import Auth from "./Auth";
import Reg from "./Reg";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/genre",
    element: <GenreMovie />,
  },
  {
    path: "/favMovie",
    element: <FavoriteMovie />,
  },
  {
    path: "/detailMovie",
    element: <DetailMovie />,
  },
  {
    path: "/popularMovie",
    element: <PopularMovie />,
  },
  {
    path: "/nowPlaying",
    element: <NowPlaying />,
  },
  {
    path: "/login",
    element: <Auth />,
  },
  {
    path: "/register",
    element: <Reg />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
