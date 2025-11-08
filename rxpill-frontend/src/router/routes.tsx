import NotFound from "@/pages/NotFound"
import Test from "@/pages/Test"
import { createBrowserRouter } from "react-router-dom"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <>hello</>, //common component to use across this path
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
    element: <NotFound/>,
  },
  {
    path: "/test",
    element: <Test/>,
  },
])
