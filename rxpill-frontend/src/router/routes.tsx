import NotFound from "@/pages/NotFound";
import Test from "@/pages/Test";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/common",
    element: <></>, //common component to use across this path
    children: [
      {
        index: true,
        element: <></>,
      },
      {
        path: "about",
        element: <></>,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
  {
    path: "/test",
    element: <Test />,
  },
]);
