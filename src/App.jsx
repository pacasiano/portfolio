
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
        <div className="">
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
  ], { basename: "/" })

  return (
    <div className="h-screen">
      {/* <p>My Portfolio </p> */}
      <RouterProvider router={router} />
    </div>
  )
}

export default App
