import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import HomeLayout from "./HomeLayout/HomeLayout.jsx";
import Home from "./pages/Home.jsx";
import FriendDetails from "./pages/FriendDetails.jsx";
import TimeLinePage from "./pages/TimeLinePage.jsx";
import Stats from "./pages/Stats.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/frienddetails/:id",
        Component: FriendDetails,
      },
      {
        path: "/timeline",
        Component: TimeLinePage,
      },
      {
        path: "/stats",
        Component: Stats,
      },
    ],
    errorElement: <ErrorPage></ErrorPage>,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
);
