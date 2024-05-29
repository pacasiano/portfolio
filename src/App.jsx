
import { RouterProvider, createBrowserRouter } from "react-router-dom"

// pages
import LandingPage from "./pages/LandingPage"

// components
import Header from "./components/general/header"

function App() {

  const router = createBrowserRouter([
    {
      index: true,
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
  ])

  return (
    <div className="bg-neutral-900 custom-pointer">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
