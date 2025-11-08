import { RouterProvider } from "react-router-dom"
import { router } from "./router/routes"
import { Toaster } from "sonner"

const App = () => {
  return (
    <>
   <RouterProvider router={router} />
    <Toaster position="bottom-right" richColors closeButton />
  </>
  )
}

export default App
