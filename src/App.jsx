
import { RouterProvider, createBrowserRouter } from "react-router-dom"

// pages
import LandingPage from "./pages/LandingPage"

// components
import Header from "./components/general/header"

function App() {

  const router = createBrowserRouter([
    {
      index: true,
      path: "/",
      element: (
        <div className="w-screen h-screen">
          <Header />
          <div className="">
            <LandingPage />
          </div>
        </div>
      ),
    },
    {
      path: "*",
      element: <div>Error</div>,
    },
  ], { basename: "/portfolio" })

  return (
    <div className="bg-neutral-900">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
